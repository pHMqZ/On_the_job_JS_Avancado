class Carro {
    velocidade = 0
    ligado = false
    nivelCombustivel = 100

    ligar() {
        if (this.ligado) {
            console.log("Carro já ligado")
        } else {
            this.ligado = true
        }
    }

    andar() {
        if (!this.ligado) {
            this.ligar()
        }
        this.velocidade = 40

    }
}

class CarroQuebrado extends Carro {
    andar() {
        console.log("Carro quebrado")
    }
}


class CarroDeCorrida extends Carro {
    andar() {
        if (!this.ligado) {
            this.ligar()
        }
        this.velocidade = 140

    }
}

class CarroComAr extends Carro {
    temp = 25
    ligaAr() {
        this.temp = 20
    }

    desligarAr() {
        this.temp = 30
    }
}

let carro = new CarroQuebrado()
let carro2 = new CarroDeCorrida()
let carro3 = new CarroComAr()
let objeto = new Object()
console.log(carro.constructor.name === 'CarroQuebrado')
console.log(typeof carro2)
console.log(typeof carro3)
console.log(typeof objeto)