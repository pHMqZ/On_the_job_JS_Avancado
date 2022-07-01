//Funções puras - sempre retornam mesmo valor
function soma(a, b) {
    return a + b;
}
let n = 10;
let a = 1;
let b = 2;
while (n-- > 0) {
    console.log(a);
    console.log(b);
    console.log(soma(a, b));
}

function quadrado(c) {
    return c * c;
}
let m = 10;
let c = 2;
while (m-- > 0) {
    console.log(c);
    console.log(quadrado(c));
}