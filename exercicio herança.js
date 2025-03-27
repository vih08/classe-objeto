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
        console.log(`0 ${this.tipo} de marca ${this.marca} esta a ${this.velocidade} km/h `)
    }
}
class Carro extends Veiculo{
    constructor(tipo, marca, cor, velocidade, passageiros, placa){
        super(tipo, marca, cor, velocidade, passageiros)
        this.placa = placa
    }
}
class Barco extends Veiculo{
    constructor(tipo, marca, cor, velocidade, passageiros, marina){
        super(tipo, marca, cor, velocidade, passageiros)
        this.marina = marina
    }
acelerar(){
    this.velocidade += 10
    console.log('HAAAAAAAAAAAA')
}
freiar() {
    this.velocidade -= 5
}
}
class Aviao extends Veiculo{
    constructor(tipo, marca, cor, velocidade, passageiros, aeroporto){
        super(tipo, marca, cor, velocidade, passageiros)
        this.aeroporto = aeroporto
    }
    acelerar(){
        this.velocidade += 30
        console.log('viiiyaau')
    }
    freiar() {
        this.velocidade -= 10
    }
}
let carro1 = new Carro ('carro', 'ford', 'preto', 0, 0, 'abc1234')
let carro2 = new Carro ('carro', 'BMW', 'branco', 0, 0, 'cba4321')
let barco = new Barco ('lancha', 'ferrari', 'branco', 0, 0, 'biguacity')
let aviao = new Aviao ('jatinho', 'ferrari', 'vermelho', 0, 0, 'aeroporto de são paulo')

carro1.apresentar()
carro1.acelerar()
carro1.apresentar()
carro1.freiar()
carro1.apresentar()
carro2.apresentar()
barco.acelerar()
barco.apresentar()
barco.freiar()
barco.apresentar()
aviao.acelerar()
aviao.apresentar()
aviao.freiar()
aviao.apresentar()