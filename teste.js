class Pessoa {
    constructor(nome, sobrenome, idade, cpf) {
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.idade = idade,
        this.cpf = cpf
    }
}
let pessoa1 = new Pessoa ('Larissa', 'Schmitz', 16, 'cpf')
//console.log(pessoa1)

class Aluno extends Pessoa {
    constructor(nome, sobrenome, idade, cpf){
        super(nome, sobrenome, idade, cpf)
        this.turma = turma
    }
}
let aluno = new Aluno('diego', 'maradona', 123, 'cpf', '3C')
console.log(aluno)