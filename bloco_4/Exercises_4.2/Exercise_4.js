let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma =0;

for(let i =0;i < numbers.length; i+=1){
   soma +=numbers[i]
   media = soma / numbers.length
};
if(media >= 20){
    console.log(`O valor ${media} é maior que 20`)
} else {
    console.log(`O valor ${media} é menor que 20`)
};

