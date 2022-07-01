//Dessa forma, não é possível sobreescrever a função 
const adicionar = function adicionar(a, b) {
    return a + b
}

function calcular(a, b, operacao) {
    return operacao(a, b)
}

let result = calcular(1, 2, adicionar)
console.log(result)