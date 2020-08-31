let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numerosImpares = 0

for(let i =0;i < numbers.length; i+=1){
    if(numbers[i] % 2 !== 0){
        numerosImpares+=1
        
    } 
};
if(numerosImpares > 0 && numerosImpares !== 1){
    
    console.log(`O array possui ${numerosImpares} números ímpares`)
} else if (numerosImpares === 1){
    console.log(`O array possui ${numerosImpares} número ímpar`)
} else {
    console.log("Nenhum valor ímpar encontrado")
};

    


