const arr = [1, 5, 10, "ola", true]

// Verifica se todos os elementos do array são números
let sohNumeros = arr.every(function(el) {
    return typeof el === "number"
})

console.log(sohNumeros)