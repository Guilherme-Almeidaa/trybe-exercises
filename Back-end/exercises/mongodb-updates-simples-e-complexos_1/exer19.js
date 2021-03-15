db.xmen.updateMany({
    $or:
        [
            {
                $and:
                    [
                        { occupation: "Senior Staff" },
                        { power: { $gt: 100 } }
                    ]
            },
            {
                $and: [
                    { occupation: "Junior Staff" },
                    { power: { $gt: 200 } }
                ]
            }
        ]
},
    { $currentDate: { lastUpdate: { $type: "timestamp" } }, $set: { area: ["Students Room"] } })