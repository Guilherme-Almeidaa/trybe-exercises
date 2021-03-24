db.superheroes.find({$and:[{"aspects.height":{$not:{$gte:180}}},{race:{$ne:"Human"}}]})
