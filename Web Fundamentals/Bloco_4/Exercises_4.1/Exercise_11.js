let salarioBruto = 6000;



if(salarioBruto <= 1556.94) {
    INSS = salarioBruto * 0.08
    salarioBase = salarioBruto - INSS;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    INSS = salarioBruto * 0.09
    salarioBase = salarioBruto - INSS;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    INSS = salarioBruto * 0.11
    salarioBase = salarioBruto - INSS;
} else {
        INSS = 570.88
    salarioBase = salarioBruto - INSS
}

if (salarioBase <=  1903.98){
    impostoRenda = 0
    salarioLiquido = salarioBase - impostoRenda
} else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    impostoRenda = (salarioBase * 0.075) - 142.80 
    salarioLiquido = salarioBase - impostoRenda;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    impostoRenda = (salarioBase * 0.15) - 354.80
    salarioLiquido = salarioBase - impostoRenda ;
} else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
    impostoRenda = (salarioBase * 0.225) - 636.13
    salarioLiquido = salarioBase - impostoRenda;
} else {
    impostoRenda = (salarioBase * 0.275) - 636.13
    salarioLiquido = salarioBase - impostoRenda;
}

console.log('Salário bruto :'+salarioBruto);
console.log('Inss :'+INSS);
console.log('Salário base :'+salarioBase);
console.log('Imposto de renda :'+impostoRenda);
console.log('O salário líquido :'+ salarioLiquido);