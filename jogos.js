window.addEventListener("load", h)

const d = new Date();

//setInterval(h, 1000)

function h(){
    const requestURL = "https://raw.githubusercontent.com/StanVard0202/dinheiro/main/equipas.json"
    const request = new Request(requestURL)
    fetch(request).then((response) => response.json()).then((data) => BIG(data));
}

let arr = []

function BIG(equipas){
    for(var i = 0;i < equipas.length; i++){
        arr.push(new jogo(equipas[i][0].nome,equipas[i][1].participantes,equipas[i][2].ano,equipas[i][3].derrotas,equipas[i][4].empates,equipas[i][5].vitorias))
    }
    
    let html = ""
    let html2 = ""
    for(var i = 0;i > arr.length; i++){
        html += arr[i].pontuação()
        html2 += arr[i].equipas()
    }
    document.querySelector("#main").innerHTML = html
    document.querySelector("#equipas").innerHTML = html2
}

class jogo{
    constructor(nome,participantes ,ano, vitoria, empate, derrota){
        this.nome = nome
        this.ano = ano
        this.vitoria = vitoria
        this.empate = empate
        this.derrota = derrota
        this.ponto = vitoria*3 + empate
        this.putos = participantes
    }
    pontuação(){
        html = `<tr><td>${this.nome}</td><td>${this.ano}</td><td>${this.ponto}</td><td>${this.vitoria}</td><td>${this.empate}</td><td>${this.derrota}</td>`
        return html
    }
    equipas(){
        let par
        for(var i = 0;i< this.participantes; i++){
            par += `<li>${this.participantes[i]}</li>`
        }
        html2 = `<div><h2>${this.nome}</h2><ul>${par}</ul></div>`
        return html2
    }
}







