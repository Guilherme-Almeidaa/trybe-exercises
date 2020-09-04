let numero = 5;
function soma(n) {
    let valor = [];
    let valorTotal=0;
    for (let i = 0; i <= n; i += 1) {
         valor.push(i)
    }
    for(contador in valor){
        valorTotal+=valor[contador]
    }
    return valorTotal
}
console.log(soma(numero))