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
const fazerPedido1 = garcon("pedido 1 para cozinha", () =>
    cozinha(pedido1, retornarPedido1)
)

const retornarPedido1 = (retorno1) => garcon(retorno1, fazerPedido2)

const fazerPedido2 = () => garcon("pedido 2 para cozinha", () =>
    cozinha(pedido2, retornoPedido2)

)

const retornoPedido2 = (retorno2) => garcon(retorno2, () =>
    garcon("pedido 3 para cozinha", fazerPedido3)
)
const fazerPedido3 = () => cozinha(pedido3, retornarPedido3)

const retornarPedido3 = (retorno3) => garcon(retorno3, encerrarpedidos())

const encerrarpedidos = () => {
    console.log("encerrando pedidos")
    console.log("pedir conta")
}

const cozinha = (pedido, callback) => setTimeout(() => {
    console.log(pedido['nome'] + ' pronto')
    callback(pedido['nome'])
}, 0);

const garcon = (tarefa, callback) => {
    console.log("Levando " + tarefa)
    callback()
}

const jantar = () => {
    console.log("inicianado pedidos")
    fazerPedido1()
}

jantar()