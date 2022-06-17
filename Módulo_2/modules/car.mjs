class Car {
    velocidade = 0
    ligado = false
    ligar() {
        this.ligado = true
    }

    desligar() {
        this.ligado = false
    }

    andar() {
        if (!this.ligado) this.ligar()
        if (this.velocidade > 0) console.log("Carro em movimento")
        this.velocidade = 40
    }
}

export default Car;