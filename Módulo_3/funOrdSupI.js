function calcular(a, b, operacao) {
    return operacao(a, b)
}

function adicionar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

console.log(calcular(2, 2, adicionar))
console.log(calcular(2, 2, subtrair))