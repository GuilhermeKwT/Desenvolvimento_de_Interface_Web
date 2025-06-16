// As auto-invocaveis podem receber parâmetros e podem ter funções auto-invocáveis dentro delas.
(function (n1, n2, n3) {
    let isValid = false
    console.log("menu", isValid, n1, n2, n3)
    (function init() {
        console.log("init menu")
        isValid = true
    })()
})(1, 2, 3)