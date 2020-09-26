let n = 7;
let linha ="";
let number = (n+1)/2;
let esquerda = number;
let direita = number ;



for(let i = 0;i <= number;i+=1){
    for( let j = 1;j <= n; j+=1){
        if(j > esquerda && j < direita){
         linha+="*"
        } else {
            linha+=" ";
        }
    }
    console.log(linha)
    linha="";
    esquerda-=1;
    direita+=1;
} 