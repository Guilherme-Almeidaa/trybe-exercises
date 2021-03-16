db.movies.find(
    {
        $and: [
            { budget: { $mod: [5, 0] } },
            { category: { $size: 2 } }
        ]
    }
)