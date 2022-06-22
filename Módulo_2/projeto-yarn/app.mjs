import moment from "moment";

moment.locale("pt-BR")

let data = moment().format('DD [de] MMMM [de] YYYY')
let hora = moment().format('HH:mm:ss')
console.log(data)
console.log(hora)