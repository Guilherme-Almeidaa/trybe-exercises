function menorNumero(numeros){
let menor=numeros[0];
for(let i =0;i < numeros.length;i+=1){
    if(numeros[i] < menor){
        menor = numeros[i]
    }
}
let indice = numeros.indexOf(menor)
return indice

}
console.log(menorNumero([2,5,67,3,4,5,1]))