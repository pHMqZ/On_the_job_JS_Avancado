function maiorQueN(n) {
    return function(m) {
        return m > n
    }
}

const maiorQue10 = maiorQueN(10)
console.log(maiorQue10(9))