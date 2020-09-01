function numeroMaior(numeros) {
    let maior = 0;

    for (let i = 0; i < numeros.length; i += 1) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        }
    }
    let indice = numeros.indexOf(maior)
    return indice;

}

console.log(numeroMaior([2, 4, 5, 6, 7, 8, 45, 4]))

