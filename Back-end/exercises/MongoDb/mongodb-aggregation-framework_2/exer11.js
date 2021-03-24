db.vendas.aggregate([
    {$match:{
        $and:[
        {dataVenda:{
            $gte:ISODate('2020-03-01'),
            $lte:ISODate('2020-03-31')
        }},
        {status:"EM SEPARACAO"}
    ]
    }},
    {$project:{
        _id:0,
        clienteId:1,
        dataVenda:1,
        dataEntregaPrevista:{
            $add:["$dataVenda",3*24*60*60*1000]
        }
    }},
    {$group:{
        _id:null,
        maxDataEntrega: {
            $max: "$dataEntregaPrevista"
          },
          minDataEntrega: {
            $min: "$dataEntregaPrevista"
          }
        }
    },
    {$project:{
        _id:0,
        dias:{
            $floor:{
            $divide:[{$subtract:["$maxDataEntrega","$minDataEntrega"]},86400000]
            }
        }
    }}
])