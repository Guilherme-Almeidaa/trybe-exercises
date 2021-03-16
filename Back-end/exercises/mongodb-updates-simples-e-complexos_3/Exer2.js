db.movies.find({
    $and: [
        {
            category: {
                $all: ["action", "adventure"]
            }
        },
        { imdbRating: { $gte: 7 } }
    ]
})