//único parâmetro
const adicionar2 = a => a + 2
console.log(adicionar2(1))

//Multiplos parâmetros
const adicionar = (a, b) => a + b
console.log(adicionar(1, 1))

//Sem parâmetros
const return2 = () => 2
console.log(return2())

//declarações e expressões
const retornaA = () => "a"
console.log(retornaA())

const retorna1mais1 = () => {
    let a = 1
    let b = 1
    return a + b
}
console.log(retorna1mais1())

const voidFunction = () => console.log("dentro da void")
const voidArrow = () => voidFunction()
console.log(voidArrow())