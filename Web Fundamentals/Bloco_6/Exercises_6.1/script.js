window.onload = function(){ let States = ["Rio Grande do Norte",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espirito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso do Sul",
    "Mato Grosso",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Acre",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins"]



States.sort()

for (let index = 0; index < States.length; index += 1) {
    const option = document.createElement('option')
    const selectionStates = document.querySelector('#estado')
    selectionStates.appendChild(option).innerText = States[index]
}

document.querySelector('#button').addEventListener('click', function () {
    
    let date = document.querySelector('#date')
    let day1 = date.value[0]
    let day2 = date.value[1]
    let month1 = date.value[3]
    let month2 = date.value[4]
    let year1 = date.value[6]
    let year2 = date.value[7]
    let year3 = date.value[8]
    let year4 = date.value[9]

    let day = `${day1}${day2}`

    let month = `${month1}${month2}`

    let year = `${year1}${year2}${year3}${year4}`

    if (date.value[2] !== "/") {
        
        alert(' Data de início não é uma data válida!')
    }
    else if (date.value[5] !== "/") {
        alert('Data de início não é uma data válida!')
    }
    else if (parseInt(day) > 31) {
        alert('Data de início não é uma data válida!')
    }
    else if (parseInt(month) > 12) {
        alert('Data de início não é uma data válida!')
    }
    else if (parseInt(year) < 0) {
        alert('Data de início não é uma data válida!')
    }
    else if (date.value.length > 10) {
        alert('Data de início não é uma data válida!')
    }

})
document.querySelector('#button').addEventListener('click' ,function(){
    let cpfValue = document.querySelector('#cpf').value
for(let index = 0 ;index < cpfValue.length; index +=1){
    numbersCpf= cpfValue[index]
}
if(isNaN(numbersCpf) === true){
   alert("Cpf inválido")
}


})
let States1 = document.querySelector('#estado')
document.querySelector('#button').addEventListener('click', function () {

    if (States1.value === "Selecione") {
        
        alert('Selecione um estado')
    }

})

let clear = document.querySelector(".clear")

clear.addEventListener('click', function () {
    document.querySelector('#name').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#cpf').value = ''
    document.querySelector("#endereço").value = ''
    document.querySelector("#cidade").value = ''
    document.querySelector("#estado").value = ''
    document.querySelector("#curriculo").value = ''
    document.querySelector("#cargo").value = ''
    document.querySelector("#descrição-cargo").value = ''
    document.querySelector("#date").value = ''
    document.querySelector('.return-name').innerHTML=""
})


 function consolid() {
    
    let name = document.querySelector('#name')
    document.querySelector('.return-name').innerHTML = `Nome:${name.value}<br>`
    let email = document.querySelector('#email')
    document.querySelector('.return-name').innerHTML += `Email:${email.value}<br>`
    let cpf = document.querySelector('#cpf')
    document.querySelector('.return-name').innerHTML += `Cpf:${cpf.value}<br>`
    let endereço = document.querySelector("#endereço")
    document.querySelector('.return-name').innerHTML += `Endereço:${endereço.value}<br>`
    let cidade = document.querySelector("#cidade")
    document.querySelector('.return-name').innerHTML += `Cidade:${cidade.value}<br>`
   
    let estado = document.querySelector("#estado")
    if(estado.value !== "Selecione"){
    document.querySelector('.return-name').innerHTML += `Estado:${estado.value}<br>`
    }

    let curriculo = document.querySelector("#curriculo")
    document.querySelector('.return-name').innerHTML += `Currículo:${curriculo.value}<br>`
    let cargo = document.querySelector("#cargo")
    document.querySelector('.return-name').innerHTML += `Cargo:${cargo.value}<br>`
    let descricaoCargo = document.querySelector("#descrição-cargo")
    document.querySelector('.return-name').innerHTML += `Descrição:${descricaoCargo.value}<br>`
    let begingDate = document.querySelector("#date")
    document.querySelector('.return-name').innerHTML += `Data de início:${begingDate.value}<br>`
}

}
