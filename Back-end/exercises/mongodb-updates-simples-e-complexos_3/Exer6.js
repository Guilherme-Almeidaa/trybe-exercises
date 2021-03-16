db.movies.find(
    {ratings:{$elemMatch:{$gte:103}}},
    {_id:false,title:true,ratings:true}
)