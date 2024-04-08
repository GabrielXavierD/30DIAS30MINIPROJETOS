verifica = document.getElementbyID("entrar")


function verifica (){
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    if  (usuario =='' || senha=='' ){
        alert("Existem campos vazios!");
    }
    else if (senha.length <5){
        alert("Digite uma senha com mais de 5 caracteres")
    }
    else{
        alert('Você entrou!');
    }
}