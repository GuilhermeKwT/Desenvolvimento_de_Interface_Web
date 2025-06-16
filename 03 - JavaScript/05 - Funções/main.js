// Podem ter alertas
(function (win, doc) {
    let isValid = false
    console.log("main", isValid)
    win.alert("ALERTA")
    function init() {
        console.log("init da main")
        isValid = true
    }
    init()
})(1, 2, 3)