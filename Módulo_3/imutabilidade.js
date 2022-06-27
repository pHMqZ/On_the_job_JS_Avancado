let input = retornoUm()
app(input)

function app(a) {
    let b = {...a, "um": 2 }
    console.log(a["um"])
    console.log(b["um"])
}

function retornoUm() {
    return { "um": 1 }
}