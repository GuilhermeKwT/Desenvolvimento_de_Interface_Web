function calcularIMC(peso, altura) {
    if (altura === undefined|| peso === undefined) {
        throw Error("valores inválidos");
    }
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 16.9) return 'imc muito baixo'
    else if (imc < 18.4) return 'imc baixo'
    else if (imc < 24.9) return 'normal'
    else if (imc < 29.9) return 'sobrepeso'
    else if (imc < 34.9) return 'obesidade grau 1'
    else if (imc < 39.9) return 'obesidade grau 2'
    else return 'obesidade grau 3';
}

let imc = calcularIMC(60, 1.65);
console.log(imc);
console.log(classificarIMC(imc));