var carro = {}

carro.velocidade = 0
carro.ligado = false
carro.nivelCombustivel = 100
carro.quantPortas = 4
carro.combustivel = "flex"
carro.cor = "Vermelho"
carro.potencia = 100

carro.ligar = function() {
    if (this.ligado) {
        console.log("Carro já ligado")
    } else {
        this.ligado = true
    }
}

carro.andar = function() {
    if (!this.ligado) {
        this.ligar()
    }
    this.velocidade = 40

}

carro.andar()
console.log(carro.velocidade)
console.log(carro.ligado)