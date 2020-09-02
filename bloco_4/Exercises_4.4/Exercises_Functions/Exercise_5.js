let inteiros = [1, 4, 5, 2, 4, 5, 6,5, 2, 3];

function repeti(numeros) {
    let repetido = 0;
    let contadorRepetir = 0;
    let numero = 0;
    for (contador in numeros) {
        repetido=0;
        for (contador2 in numeros) {
            if (numeros[contador] === numeros[contador2]) {
                repetido += 1
            }
            if (repetido > contadorRepetir) {
                numero = numeros[contador]
                contadorRepetir=repetido
            }

        }
    }


    return numero
}
console.log(repeti(inteiros))