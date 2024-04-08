
function calculaIdade() {
    if (document.getElementById("tPequeno").checked) {
        let idadeCachorro = document.getElementById("idadeCao").value;
        if (idadeCachorro <= 2) {
            let resultado = Number(idadeCachorro) * Number(12.5);
            document.getElementById("resultado").value = resultado + " anos humanos";
        }
        else if (idadeCachorro >= 3) {
            let resultado = ( Number(2) * Number(12.5) ) + ( (Number(idadeCachorro) - Number(2) ) * Number(5.5) );
            document.getElementById("resultado").value = resultado + " anos humanos";
        }
        else{
            document.getElementById("resultado").value = "Erro!";
        }
    }

    if (document.getElementById("tMedio").checked) {
        let idadeCachorro = document.getElementById("idadeCao").value;
        if (idadeCachorro <= 2) {
            let resultado = Number(idadeCachorro) * Number(10.5);
            document.getElementById("resultado").value = resultado + " anos humanos";
        }
        else if (idadeCachorro >= 3) {
            let resultado = ( Number(2) * Number(10.5) ) + ( (Number(idadeCachorro) - Number(2) ) * Number(5.6) );
            document.getElementById("resultado").value = resultado + " anos humanos";
        }
        else{
            document.getElementById("resultado").value = "Erro!";
        }
    }

    if (document.getElementById("tGrande").checked) {
        let idadeCachorro = document.getElementById("idadeCao").value;
        if (idadeCachorro <= 2) {
            let resultado = Number(idadeCachorro) * Number(9);
            document.getElementById("resultado").value = resultado + " anos humanos";
        }
         else if (idadeCachorro >= 3) {
            let resultado = ( Number(2) * Number(9) ) + ( (Number(idadeCachorro) - Number(2) ) * Number(8.4) );
            document.getElementById("resultado").value = resultado + " anos humanos";
        }
        else{
            document.getElementById("resultado").value = "Erro!";
        }

            }
        }
        

