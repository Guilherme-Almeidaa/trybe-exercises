const randomNumbers = () => {
    const numbers = [];
    for (let num = 1; num <= 10; num += 1) {
        const result = Math.floor(Math.random() * 50);
        const resultSquare = result ** 2;
        numbers.push(resultSquare);
    }
    return numbers
}
const checkNumber = async () => {
    const resultDivide = [];
    const numberToDivide = [2, 3, 5, 10];
    const sum = randomNumbers().reduce((result, number) => result + number);
    if (sum >= 8000) {
        throw new Error(sum);
    }
    const divide = (number) => {
        resultDivide.push(sum / number);
    }
    numberToDivide.forEach(divide);
    return resultDivide;
}
const result = () => {
    checkNumber()
        .then(sum => sum)
        .then(sum => sum.reduce((result, number) => result + number))
        .then(msg => console.log(msg))
        .catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));
}

result();