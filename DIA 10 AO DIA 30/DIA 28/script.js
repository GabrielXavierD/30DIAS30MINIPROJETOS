function verificaSenha() {
    let senha = document.getElementById("senha").value;
    let verificarBtn = document.getElementById("verificarBtn");


    if (senha) {
        if (senha.length >= 10) {
            document.getElementById("senhaMaior10").style.color = "green";
        } else {
            alert("Sua senha precisa ter mais digitos!");
            verificarBtn.disabled = true;
            document.getElementById("senhaMaior10").style.color = "red";
        }

        if (/[a-z]+/.test(senha)) {
            document.getElementById("senhaUmaLMin").style.color = "green";
        } else {
            alert("Adicione pelo menos uma letra minúscula na sua senha!");
            verificarBtn.disabled = true;
            document.getElementById("senhaUmaLMin").style.color = "red";
        }

        if (/[A-Z]+/.test(senha)) {
            document.getElementById("senhaUmaLMai").style.color = "green";
        } else {
            alert("Adicione pelo menos uma letra maiúscula na sua senha!");
            verificarBtn.disabled = true;
            document.getElementById("senhaUmaLMai").style.color = "red";

        }

        if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(senha)) {
            document.getElementById("senhaUmCEsp").style.color = "green";
        } else {
            alert("Adicione pelo menos um caracter especial na sua senha!");
            verificarBtn.disabled = true;
            document.getElementById("senhaUmCEsp").style.color = "red";
        }

        if (/[0-9]+/.test(senha)) {
            document.getElementById("senhaNum").style.color = "green";
        } else {
            alert("Adicione pelo menos um número na sua senha!");
            verificarBtn.disabled = true;
            document.getElementById("senhaNum").style.color = "red";
        }

    } else {
        alert("Preencha o campo de senha!");

    }


    // Agendar a ativação do botão após 2 segundos
    setTimeout(function () {
        verificarBtn.disabled = false;
    }, 1500);


} 