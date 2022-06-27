//Funções impuras - Retorna valores diferentes sempre e tem efeitos colaterais - altera valor de d
function quadrado(n) {
    console.log(n * n)
}

//função pura
function app() {

    let n = 5
    let a = 2

    while (n-- > 0) {
        quadrado(n)
    }
}

app()