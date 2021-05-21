db.clientes.aggregate([
    {
        $addFields: {
            idade: {
                $floor: {

                    $divide: [
                        {
                            $divide: [
                                {
                                    $subtract: [
                                        "$$NOW", "$dataNascimento"
                                    ]
                                }, 86400000
                            ]
                        }, 365
                    ]

                }
            }
        }
    },
    {
        $lookup: {
            from: "vendas",
            localField: "clienteId",
            foreignField: "clienteId",
            as: "compras"
        }
    }
    
    , {
        $match: {
            compras: {
                $elemMatch:
                {

                    dataVenda: {
                        $gte: ISODate('2019-06-01'),
                        $lte: ISODate('2020-03-31')
                    }
                },

            }
        }
    },
    {
        $addFields: {
            total: {
                $size: "$compras"
            }
        }
    },
   
    { $sort: { total: -1 } },
    { $limit: 10 },
    {$unwind:"$compras"} ,
    {$addFields:{
        "compras.valorComDesconto":{
            $subtract:["$compras.valorTotal",{$divide:["$compras.valorTotal", 10]} ]
        }
    }},
    {$group:{
        _id:"$endereco.uf",
        comprasPorEstado:{$sum:1}
    }}
    ,
    {$sort:{comprasPorEstado: -1}},
      {$limit:5}

])