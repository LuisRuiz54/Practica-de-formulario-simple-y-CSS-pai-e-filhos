let nome = document.getElementById("nome")
let email = document.getElementById("email")
let senha = document.getElementById("senha")
let form = document.getElementById("form")
let alerta = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (nome.value.length <3){
        warnings += `Opss! Seu nome é muito curto, tente de novo <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings +=`Wopa não é valido , tente de novo <br>`
        entrar =  true
    }
    if(senha.value.length < 6){
        warnings +=`hey! Sua senha não funciona , tente de novo <br>`
        entrar =  true
    }
    if(entrar){
        alerta.innerHTML = warnings
    }

})  
