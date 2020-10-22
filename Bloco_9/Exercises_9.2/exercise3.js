const checkNumber = async () => {
    const numbers = [];
    for (let num = 1; num <= 10; num += 1) {
        let result = Math.floor(Math.random() * 50);
        let resultSquare = result ** 2;
        numbers.push(resultSquare);
    }
    const sum = numbers.reduce((result, number) => result + number);
    if (sum >= 8000) {
        throw new Error(`Fracasso nosso número foi ${sum}`);
    }
    return sum;
}
const result = () => {
    checkNumber()
        .then(sum => `Sucesso nosso número foi ${sum}`)
        .then(msg => console.log(msg))
        .catch((err) => console.log(err));
       
}
result();



