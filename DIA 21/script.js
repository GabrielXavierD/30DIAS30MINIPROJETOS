function calculaImc(){
    let  altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;


    let resultadoImc = Number(peso) / (Number(altura)*Number(altura));
    document.getElementById("resultado").value = resultadoImc.toFixed(2) //formatando o numero pra aparecer 2 casas decimais;

}