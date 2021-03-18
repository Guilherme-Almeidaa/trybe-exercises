db.vendas.aggregate([
    {$group:{
        _id:"$clienteId",
        
        number:{
            $sum: 1
        }
    }},
     
    {$match:{"number":{$gt:5}}},
    {$group:{
        _id:null,
        clientes:{$sum : 1}
    }},
     {$project:{
         _id:0,
         
     }}
])