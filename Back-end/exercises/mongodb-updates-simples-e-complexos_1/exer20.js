db.xmen.updateMany({
    $and:[
        {occupation:"Junior Staff"},
        {area:{$exists:false}}
    ]
},{
    $set:{
        area:["outside"]
    }
})