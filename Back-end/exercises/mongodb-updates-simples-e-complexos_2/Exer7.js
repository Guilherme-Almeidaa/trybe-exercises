db.movies.updateMany(
    {$or:[
        {title:"Batman"},
        {title:"Home Alone"}
    ]},
    {$push:{
        category:"90's"
    }}
)