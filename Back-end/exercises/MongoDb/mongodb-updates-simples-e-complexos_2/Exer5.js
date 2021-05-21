db.movies.update(
    { title: "Batman" },
    {
        $pop: {
            category: 1
        }
    }
)