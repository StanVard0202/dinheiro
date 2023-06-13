export default class jogo{
    constructor(nome, ano, vitoria, empate, derrota){
        this.nome = nome
        this.ano = ano
        this.vitoria = vitoria
        this.empate = empate
        this.derrota = derrota
    }
    html(){
        html = `<tr><td>${this.equipa1}</td><td>${this.resultado}</td><td>${this.equipa2}</td><td>${this.hora}</td>`
        return html
    }
}