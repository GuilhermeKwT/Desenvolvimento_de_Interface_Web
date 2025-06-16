// Colocar a função entre parenteses e com um conjuto de parenteses no final ela vai ser chamada automaticamente
/*
(function init(){
    console.log("init menu");
})()
    */


// Nem precisa nomear a função
/*
(function (){
    console.log("init menu");
})()
    */


// Pode-se declarar uma função dentro de uma função
(function () {
    let isValid = false
    console.log("menu", isValid)
    function init() {
        console.log("init menu")
        isValid = true
    }
})