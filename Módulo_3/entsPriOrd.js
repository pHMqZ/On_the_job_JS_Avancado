const adicionar = function(a, b) {
    return a + b
}

const clicar = function() {
    console.log("clicado")
}

const acao = function(a, b, callback) {
    console.log("Fazendo algo demorado")
    console.log(callback(a, b))
}

acao(1, 2, adicionar)