db.movies.updateOne(
    {title:"Batman"},
    {$push:{
      "cast.$[elemento].actor":"Cristian Bale"
    }},
    {arrayFilters:[{"elemento.character":"Batman"}]}
)

db.movies.updateOne(
    {title:"Batman"},
    {$push:{
        "cast.$[elemento].actor":"Michel Caine"
    }},
    {arrayFilters:[{"elemento.character":"Alfred"}]}
)

db.movies.updateOne(
    {title:"Batman"},
    {$push:{
       "cast.$[elemento].actor":"Heath Ledger"
    }},
    {arrayFilters:[{"elemento.character":"Coringa"}]}
)