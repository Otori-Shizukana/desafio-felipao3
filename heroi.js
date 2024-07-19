class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo.toLowerCase()
    }
    ataque(){
        if ("mago" === this.tipo){
            console.log(`${this.nome}, o ${this.tipo}, atacou usando Magia`)
        }else if("guerreiro" === this.tipo){
            console.log(`${this.nome}, o ${this.tipo}, atacou usando Espada`)
        }else if("monge" === this.tipo){
            console.log(`${this.nome}, o ${this.tipo}, atacou usando artes marciais`)
        }else if("ninja" === this.tipo){
            console.log(`${this.nome}, o ${this.tipo}, atacou usando shuriken`)
        }
    }

}

let nome = ["Link", "Arthur", "Sebastian", "Frederico"]
let idade = [23, 24, 30, 32]
let tipo = ["guerreiro", "guerreiro", "mago", "ninja"]
for(let i = 0; i < nome.length; i++){
    let pessoa = new Heroi(nome[i], idade[i], tipo[i])
    pessoa.ataque()
}