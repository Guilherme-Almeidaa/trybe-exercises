db.movies.updateOne(
    { title: "Batman" },
    {
        $push: {
            "cast.$[elemento].actor": {
                $each: [
                    "Michael Keaton",
                    "Val Kilmer",
                    "George Clooney"
                ],
                $sort: 1
            }
        }
    },
    { arrayFilters: [{ "elemento.character": "Batman" }] }
)



