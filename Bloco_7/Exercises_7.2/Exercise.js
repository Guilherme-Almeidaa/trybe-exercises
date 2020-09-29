const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

//Exercise 1
const addTurn = (object, key, value) => {

    object[key] = value;
}

addTurn(lesson2, 'turno', 'manhã');
console.log(lesson2);

//Exercise 2 

const keys = (object) => {
    return Object.keys(object)
}

console.log(keys(lesson2));

//Exercise 3 

const length = (object) => {
    return Object.keys(object).length
}

console.log(length(lesson2));

//Exercises 4 

const value = (object) => {
    return Object.values(object);
}

console.log(value(lesson2));

//Exercise 5 

const allLessons = {};
const lessons = {
    lesson1,
    lesson2,
    lesson3
}
Object.assign(allLessons, lessons)
console.log(allLessons)

//Exercise 6 

const students = (object) => {
    let numberStudents = 0
    for (index in object) {
        numberStudents += object[index]['numeroEstudantes']
    }
    return numberStudents
}
console.log(students(allLessons))

//Exercise 7 
const valuePosition = (object, position) => {



    return Object.values(object)[position]
}

console.log(valuePosition(lesson1, 0))

//Exercise 8

const check = (object, key, content) => {
    const contents = Object.entries(object);
   
    let checks = false;
    for(index in contents){
        if(contents[index][0] === key && contents[index][1] === content){
            checks = true
        }
    }
    return checks
}


console.log(check(lesson1, 'turno', 'noite'));
console.log(check(lesson1, 'turno', 'manhã'));



