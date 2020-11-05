function verificar(palavra1, palavra2) {
let final="";
    
    if (palavra1.length > palavra2.length) {


        for (let j = palavra1.length-palavra2.length; j < palavra1.length; j += 1) {
            final+=palavra1[j]
        }
        if((final === palavra2)){
            return true
        } else {
            return false
        }

    }

}
console.log(verificar("Guilherme", "lherme"))