db.superheroes.find({$and:[{$or:[{"aspects.height":180},{"aspects.height":200}]},{publisher:{$eq:"Marvel Comics"}}]}).pretty()

