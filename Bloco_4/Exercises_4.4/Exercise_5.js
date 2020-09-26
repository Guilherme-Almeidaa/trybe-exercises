let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"

};
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain,Dell's Four Color Comics #178",
    nota: "O ultimo MacPatinhas",
    recorrente: "Sim"
}
for (chave in info) {


    for (chave2 in info2) {
        if (chave === chave2 && info[chave] !== info2[chave]) {
            console.log(`${info[chave]} e ${info2[chave]}`)
        }
    }
}
if (info.recorrente === "Sim" && info2.recorrente === "Sim") {
    console.log("Ambos recorrentes")
} else if (info.recorrente === "Não" && info2.recorrente === "Sim") {
    console.log("Apenas o Tio Patinhas é recorrente")
} else if (info.recorrente === "Sim" && info2.recorrente === "Não") {
    console.log("Apenas a Margarida é recorrente")
} else {
    console.log("Nenhum é recorrente")
}







