const skills = ['HTML', 'JavaScript', 'CSS', 'Dedicado', 'Unix'];
const replace = (word) => {
    const phrase = `Eu sou x!!`;
    let newphrase = '';
    for (let index = 0; index < phrase.length; index += 1) {
        let check = false
        if (phrase[index] === 'x') {
            newphrase += word;
            check = true;
        }
        if (check) {
            newphrase += '';
        } else {
            newphrase += phrase[index];
        }
    }
    return newphrase;
}
const concatenation = (phrase) => {
    phrase = replace('Tryber');
    let mySkills = '';
    skills.sort();
    for (let index = 0; index < skills.length; index += 1) {
        mySkills += skills[index];
        mySkills += ', ';
    }
    return `${phrase} Minhas cinco principais habilidades são:${mySkills}`;
}

console.log(concatenation());



