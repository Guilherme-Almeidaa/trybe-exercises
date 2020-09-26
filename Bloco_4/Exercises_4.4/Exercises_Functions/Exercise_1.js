function palindromo(palavra){
    let palavraVolta="";
    
    for(let i = palavra.length-1;i >=0;i-=1){
        palavraVolta+=palavra[i];
    }
    if(palavra === palavraVolta){
        resultado=true
    } else{
        resultado=false
    }
    return resultado;


}
palindromo("tenet")
console.log(resultado)
