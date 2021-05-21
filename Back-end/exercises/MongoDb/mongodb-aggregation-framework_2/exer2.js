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
                                         "$$NOW","$dataNascimento"
                                    ]
                                }, 86400000
                            ]
                        }, 365
                    ]

                }
            }
        }
    },
    {$match:{idade:{$gte:18,$lte:25}}},
    {
        $count:"clientes"
    }
    
])