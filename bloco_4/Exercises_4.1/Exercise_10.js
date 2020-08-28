let custoProduto = 50;
let valorVenda = 105;
let valorCustoTotal = custoProduto + (custoProduto * 0.2);

if(custoProduto > 0 || valorVenda > 0) {

console.log('O lucro da venda de 1000 produtos é de '+(valorVenda - valorCustoTotal)*1000);
} else {
    console.log('Valor inválido')
}

