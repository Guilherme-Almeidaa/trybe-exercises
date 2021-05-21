db.vendas.aggregate([
    {
        $match: {
            dataVenda: { $gte: ISODate('2020-01-01') }
        }
    },
    {
        $lookup:
        {
          from:"clientes",
          localField:"clienteId",
          foreignField:"clienteId",
          as: "info_cliente"
        }
    },
    {$unwind:"$info_cliente"},
    {$group:{
        _id:"$info_cliente.endereco.uf",
        number:{
            $sum:1
        }
    }}
    ,{$sort:{"number":-1}},
    {$project:{
        _id:0,
        totalVendas:"$number",
        uf:"$_id"
    }},
    {$limit :3}
])