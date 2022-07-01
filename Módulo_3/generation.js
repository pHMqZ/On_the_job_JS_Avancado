function* generator() {
    console.log("Iniciado o generator")
    yield 1
    console.log("Segunda iteração")
    yield 2
    console.log("Terceira iteração")
    yield 3
    console.log("Final")
}
let gen = generator()
console.log(gen)
gen.next()
gen.next()
gen.next()
let result = gen.next()
console.log(result)