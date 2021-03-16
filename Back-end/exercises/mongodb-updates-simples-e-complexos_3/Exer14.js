db.movies.find(
    {$and:[
        {ratings:{size:4}},
        {category:{
            $elemMatch:"adventure"
        } },
        {imdbRating:{$not:{$glt:7}}}
    ]}
)