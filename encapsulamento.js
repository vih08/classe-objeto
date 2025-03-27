class veiculo{
    #velocidade
    constructor(tipo, marca, cor, velocidade, passageiros){
        this.tipo = tipo;
        this.marca = marca;
        this.cor = cor;
        this.#velocidade = velocidade;
        this.passageiros = passageiros
    }
    acelerar(){
        this.#velocidade += 10
        console.log('vrum,vrum')
    }
    freiar (){
        this.#velocidade -= 5
    }
    apresentar(){
        console.log(`O ${this.tipo} de marca ${this.tipo} ${this.marca} esta a ${this.velocidade} km/h`)
    }
    get velocidade(){
        return this.#velocidade
    }
    set velocidade (valor){
        if (valor < 0){
            console.log('Erro, o valor não pode ser menor que 0!')
        }
        this.#velocidade += valor
    }
}
class carro extends veiculo{
    constructor(tipo, marca, cor, velocidade, passageiros, placa){
    super(tipo, marca, cor, velocidade, passageiros)
    this.placa = placa 
    }
}

class barco extends veiculo{
    constructor(tipo, marca, cor, velocidade, passageiros, marina){
        super(tipo, marca, cor, velocidade, passageiros)
        this.marina = marina 
    }
    //polimorfismo
    acelerar(){
        this.velocidade = 1
        console.log('HAAAAAAAAAAAAAAAAAM')
    }
    freiar (){
        this.velocidade -= 1
    }
}

class aviao extends veiculo{
    constructor(tipo, marca, cor, velocidade, passageiros, aeroporto){
        super(tipo, marca, cor, velocidade, passageiros)
        this.aeroporto = aeroporto 
    }
    //polimorfismo
    acelerar(){
        this.velocidade = 30 
        console.log('barulho de avião acelerando')
    }
    freiar (){
        this.velocidade -= 15
    }
}

let carro1 = new veiculo('carro', 'renault', 'prata', 0, 0, 'ffge444')
let carro2 = new veiculo('carro', 'BMW', 'Rosa', 0, 0, 'ffge22')
let Barco = new barco('lancha', 'ferrari', 'branca', 0, 0, 'palhoça' ) 
carro1.apresentar()
carro2.apresentar()
carro1.acelerar()
carro1.apresentar()
carro1.freiar()
carro1.apresentar()
carro2.apresentar()
Barco.acelerar()
Barco.apresentar()