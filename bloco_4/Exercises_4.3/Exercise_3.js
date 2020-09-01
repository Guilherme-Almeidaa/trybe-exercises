let n = 5;


for ( i = 0; i < n ; i+=1) {
    let linha ="";

    for(let j = 0;j < n ;j+=1){
        if(j >= n -(i+1)){
            linha+="*"
        }else{
            linha+=" "
        }
      
    }

console.log(linha)
   
}  




