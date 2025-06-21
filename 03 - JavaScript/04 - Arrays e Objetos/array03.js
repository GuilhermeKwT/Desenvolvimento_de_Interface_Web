const arr = [1, 5, 10, "ola", true]

// Verifica se pelo menos um elemento do array é um número
let sohNumeros = arr.some(function(el) {
    return typeof el === "number"
})

console.log(sohNumeros)