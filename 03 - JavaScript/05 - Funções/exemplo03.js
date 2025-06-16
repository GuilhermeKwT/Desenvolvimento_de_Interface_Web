function somar(a, b) {
    return a + b;
}

console.log(somar(1, 2));

// Não suporta polimorfismo
function somar2(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(somar2([1, 2, 3, 4, 5]));

// Quando se usa o arguments, não é necessário saber o que está sendo passado como parâmetro
function somar3(){
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}