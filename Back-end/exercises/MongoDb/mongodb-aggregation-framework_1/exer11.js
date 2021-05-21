db.vendas.aggregate([
    {$match:{ dataVenda:{$gte:ISODate('2020-01-01'),$lte:ISODate('2020-03-31')}}},
    {$group:{
        _id:"$clienteId",
        compras:{
            $sum: 1
        },
        
    }},
    {$match:{
        "compras":{$lt:3},
    }},
    {$group:{
        _id:null,
        clientes:{$sum:1}
    }},
    {$project:{_id:0}}
])