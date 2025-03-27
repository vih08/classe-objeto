class Veiculo { 
    
    constructor(tipo, marca, cor, velocidade, passageiros) {
        this.tipo = tipo,
        this.marca = marca,
        this.cor = cor,
        this.velocidade = velocidade,
        this.passageiros = passageiros
    }
    acelerar () {
        this.velocidade += 10
        console.log('vrum vrum')
    }
    freiar() {
        this.velocidade -= 5
    }
    apresentar () {
        console.log(`0 ${this.tipo} de marca ${this.marca}
            esta a ${this.velocidade} km/h `)
    }
}
let carro1 = new Veiculo ('carro', 'ford', 'preto', 0, 0)
let carro2 = new Veiculo ('carro', 'BMW', 'branco', 0, 0)
carro1.apresentar()
carro1.acelerar()
carro1.apresentar()
carro1.freiar()
carro1.apresentar()
carro2.apresentar()
