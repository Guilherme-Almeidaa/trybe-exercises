function romanos(a) {
    let numero1 = [];
    let numeros = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000

    }
    let num = numero1[0];
    let numero2 = [];
     let nume=0;
    for (let i = 0; i < a.length; i += 1) {
        for (key in numeros) {
            
            if (a[i] === key) {
                numero1.push(numeros[key])
            }
        

        for (let j = 0; j < a.length; j += 1) {
            for (let k = 0; k < a.length; k += 1) {
               
                if (a[k] + a[j] === key && nume ===0){
                    numero2.push(numeros[key])
                    nume+=1
                }
                for( let l = 0 ;l < numero2.length;l+=1){
                if (a[k] + a[j] === key && numeros[key] !== numero2[l] ){
                    numero2.push(numeros[key])
                }
            }
        }
        }
    }
    }
    return numero2
}
    console.log(romanos("XIX"))
    /* if (numero1[j] > num) {
        num = numero1[j] - num
    } else if (numero1[j] < numero1[j] - num && numero1[j] - num !== 0) {
        num += numero1[j]
    } else if (num > numero1[j] + num) {
        num += numero1[j]
    } else if (numero1[j] < num && num > numero1[j] + num) {
        num = num - numero1[j]
    } else if (num > numero1[j] && numero1[j] !== 1) {
        num += numero1[j]
    } else if (num > numero1[j]) {
        num -= numero1[j]
    }

    return num
}
console.log(romanos("XIX"))*/
