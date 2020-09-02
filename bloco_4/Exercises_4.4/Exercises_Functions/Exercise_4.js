let nomes = ["Jose","Guilherme","Maria", "João"]

function maiorPalavra(array) {
    
    let maiorNome = array[0];
    for (indice in array) {
        if (array[indice].length > maiorNome.length) {
            maiorNome = array[indice]
        }
    }

        return maiorNome
    }
    console.log(maiorPalavra(nomes))



