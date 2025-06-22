let arr = [3, 12, 6, 2, 41, 3, 7, 23, 8, 9, 3, 2, 13, 55, 6, 2, 242, 166, 87, 323]
let soma = arr.reduce(function(ac, at) {
    if ((ac % 2) == 1){
        return ac + at
    }
    else {
        return ac
    }
})
console.log("soma: " + soma)