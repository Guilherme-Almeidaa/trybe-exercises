db.movies.drop();
db.movies.insertMany([
  {
    "title": "Batman",
    "category": [
      "action",
      "adventure"
    ],
    "imdbRating": 7.7,
    "budget": 35,
    "cast" : [
		{
			"character" : "Batman",
			"actor" : [
				"Cristian Bale"
			]
		},
		{
			"character" : "Alfred",
			"actor" : [
				"Michel Caine"
			]
		},
		{
			"character" : "Coringa",
			"actor" : [
				"Heath Ledger"
			]
		}
	]


  },
  
  {
    "title": "Godzilla",
    "category": [
      "action",
      "adventure",
      "sci-fi"
    ],
    "imdbRating": 6.6,
    "budget": 1
  },
  {
    "title": "Home Alone",
    "category": [
      "family",
      "comedy"
    ],
    "imdbRating": 7.4
  }
]);