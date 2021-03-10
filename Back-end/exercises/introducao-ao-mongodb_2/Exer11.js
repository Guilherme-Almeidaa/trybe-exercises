db.superheroes.find({$nor:[{"aspects.hairColor":"Black"},{"aspects.hairColor":"No Hair"}]}).pretty()
