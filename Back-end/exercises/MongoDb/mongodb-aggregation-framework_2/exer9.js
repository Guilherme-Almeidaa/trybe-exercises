db.vendas.aggregate([
    {$match:{
        "itens.nome":"QUEIJO PRATO"
    }},
    {$unwind:"$itens"},
   {$match:{
    "itens.nome":"QUEIJO PRATO"
   }},
    {$group:{
        _id:"$clienteId",
        totalCOnsumido:{$sum:"$itens.quantidade"},
        
    }},
    {$sort:{totalCOnsumido: -1}},
    {$limit:1},
    {
        $lookup: {
            from: "clientes",
            localField: "_id",
            foreignField: "clienteId",
            as: "cliente"
        }
    },
    {$unwind:"$cliente"},
    {$project:{
        _id:0,
        nomeCliente:"$cliente.nome",
        uf:"$cliente.endereco.uf",
        totalConsumido:"$totalCOnsumido"
    }}
    
])