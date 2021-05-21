db.vendas.aggregate([
    {$match:{ dataVenda:{$gte:ISODate('2019-01-01'),$lte:ISODate('2019-12-31')}}},
   
    {$lookup:
        {
            from:"clientes",
            localField:"clienteId",
            foreignField:"clienteId",
            as: "info_cliente"
          }},
          {$unwind:"$info_cliente"},
          {$group:{
              _id:"$info_cliente.endereco.uf",
              totalVendas:{
                  $sum:1
              },
              mediaVendas:{$avg:"$valorTotal"}
          }},
        
])