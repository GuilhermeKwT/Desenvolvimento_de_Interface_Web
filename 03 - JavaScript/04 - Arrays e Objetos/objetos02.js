let valor1 = {n: 10}
let valor2 = {n: 10}


function mudaValor(obj){
    obj.n++
    console.log("valor interno", obj.n)
}

mudaValor(valor1)
console.log("valor externo", valor1.n)

//sempre vai dar errado por estar comparando endereços de memória
console.log(valor1 === valor2)