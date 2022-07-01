let pedido1 = {
    'nome': 'pedido1',
    'tempo': 3000
}

let pedido2 = {
    'nome': 'pedido2',
    'tempo': 1000
}

let pedido3 = {
    'nome': 'pedido3',
    'tempo': 2000
}

const cozinha = (pedido) => new Promise(
    (resolve, reject) => {
        console.log("Executando promisse")
        let tenhoIngredientes = true
        setTimeout(() => {
            if (!tenhoIngredientes) {
                reject("Sem igredientes")

            } else {
                console.log(pedido['nome'] + ' pronto')
                resolve(pedido['nome'] + " para cliente")
            }
        }, pedido['tempo']);
    }
)

function* garcon() {
    yield cozinha(pedido1)
    yield cozinha(pedido2)
    yield cozinha(pedido3)
}

const jantar = async() => {
    let meuGarcon = garcon()
    console.log("Iniciando pedidos")
    let pedido = meuGarcon.next()
    while (!pedido.done) {
        console.log(await pedido.value)
        pedido = meuGarcon.next()
    }
    console.log("Pedir conta")
}

jantar()