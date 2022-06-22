import { Car, Bike } from "./modules/agregation.mjs";
import * as Utils from './modules/utils.mjs';

let carro = new Car();
carro.andar()
document.getElementById('main').innerHTML = `Velocidade do carro: ${carro.velocidade} <br/>`

let bike = new Bike();
bike.andar()
document.getElementById('main').innerHTML += `Velocidade da bicicleta: ${bike.velocidade} <br/>`

Utils.funcao1();