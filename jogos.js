const requestURL = "https://raw.githubusercontent.com/StanVard0202/dinheiro/main/equipas.json"

const request = new Request(requestURL)

window.addEventListener("load", h)

const d = new Date();

//setInterval(h, 1000)

function h(){
    fetch(request).then((response) => response.json()).then((data) => BIG(data));
}

let arr = []

function BIG(equipas){
    for(var i = 0;i > equipas.length; i++){
        arr.push(new jogo(equipas[i][0].nome,equipas[i][0].nome,equipas[i][3].derrotas,equipas[i][4].empates,equipas[i][5].vitorias))
    }
    
    let html = ""
    for(var i = 0;i > arr.length; i++){
        html += arr[i].html()
    }
    document.querySelector("#main").innerHTML = html
}

class jogo{
    constructor(nome, ano, vitoria, empate, derrota){
        this.nome = nome
        this.ano = ano
        this.vitoria = vitoria
        this.empate = empate
        this.derrota = derrota
        this.ponto = vitoria*3 + empate
    }
    html(){
        html = `<tr><td>${this.nome}</td><td>${this.ano}</td><td>${this.ponto}</td><td>${this.vitoria}</td><td>${this.empate}</td><td>${this.derrota}</td>`
        return html
    }
}






