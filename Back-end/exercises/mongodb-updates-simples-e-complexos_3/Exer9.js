db.movies.find(
    {$and:[
        {category:{
            $all:["adventure"]
        }},
        {ratings:{
            $elemMatch:{$gte:103}
        }}
    ]},
    {_id:false,title:true,ratings:true,category:true}
)