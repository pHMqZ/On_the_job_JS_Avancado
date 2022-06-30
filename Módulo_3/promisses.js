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
        let tenhoIngredientes = pedido["nome"] != "pedido3"
        setTimeout(() => {
            if (!tenhoIngredientes) {
                reject("Sem igredientes")

            } else {
                console.log(pedido['nome'] + ' pronto')
                resolve(pedido['nome'] + " para cliente")
            }
        }, pedido['tempo']);
    })


const jantar = async() => {
    console.log("inicianado pedido")
    try {

        let retorno = await cozinha(pedido1)
        console.log(retorno)
        console.log("comer")
        await cozinha(pedido2)
        await cozinha(pedido3)
    } catch (retorno) {
        console.log(retorno)
        console.log("Mudar pedido")
    }
    return "Pedir conta";

}

const funcaoSinc = () => {
    let result = jantar()
    return result
}

const funcaoAssinc = async() => {
    let result = await funcaoSinc()
    return "O resultado é: " + result
}

funcaoSinc().then((result) => console.log(result))
funcaoAssinc().then((result) => console.log(result))