(function(){
    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const formCadastro = document.querySelector(".formCadastro")
    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0]
    const txtDescricao = document.getElementById("txtDescricao")
    const contadorContainer = document.getElementById("contador")
    const resta = contadorContainer.getElementsByTagName("span")[0]
    const maxima = txtDescricao.maxLength
    const chkAceito = document.getElementById("chkAceito")

    formCadastro.addEventListener("submit", function(e){
        if(!txtTitulo.value){
            showErrorMessage("Preencha todos os campos", function(){
                txtTitulo.focus()
            })
            e.preventDefault()
        }
    })

    function showErrorMessage(msg, cb){
        feedbackMessage.classList.add("show")
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg
        feedbackMessageCloseBtn.focus()

        function hideErrorMessage(){
            feedbackMessage.classList.remove("show")
            feedbackMessageCloseBtn.removeEventListener("click", hideErrorMessage)
            feedbackMessageCloseBtn.removeEventListener("keyup", pressedKeyboardOnBtn)
            if(typeof cb === 'function'){
                cb()
            }
        }

        function pressedKeyboardOnBtn(e){
            if(e.keyCode === 27){
                hideErrorMessage(   )
            }
        }

        feedbackMessageCloseBtn.addEventListener("click", hideErrorMessage)
        feedbackMessageCloseBtn.addEventListener("keyup", pressedKeyboardOnBtn)
    }

    mostrarNumero(maxima)
    contadorContainer.style.display = "block"
    function checkLength(){
        let numeroLetrasDigitadas = this.value.length
        let caracteresRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas)
        mostrarNumero(caracteresRestantes)
    }
    function mostrarNumero(n){
        resta.textContent = n
    }
    txtDescricao.addEventListener("input", checkLength)
    btn.disabled = true
    chkAceito.addEventListener("change", function(){
        btn.disabled = !this.checked
    })

})()