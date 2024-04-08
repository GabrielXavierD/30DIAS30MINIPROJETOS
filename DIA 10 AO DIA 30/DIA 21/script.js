function calculaImc(){
    let  altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;


    let resultadoImc = Number(peso) / (Number(altura)*Number(altura));
    document.getElementById("resultado").value = resultadoImc.toFixed(2) //formatando o numero pra aparecer 2 casas decimais;

    if(resultadoImc < 18.5){
        document.getElementById("mensagem").innerHTML = "IMC: MENOR QUE 18,5;  CLASSIFICAÇÃO: MAGREZA; OBESIDADE (GRAU): 0";
    }
    
    else if(resultadoImc  >=18.5 && resultadoImc <=24.9){
        document.getElementById("mensagem").innerHTML = "IMC: ENTRE 18,5 E 24,9;  CLASSIFICAÇÃO: NORMAL; OBESIDADE (GRAU): 0";
    }
    
    else if(resultadoImc >=25 && resultadoImc <=29.9){
        document.getElementById("mensagem").innerHTML = "IMC: ENTRE 25,0 E 29,9;  CLASSIFICAÇÃO: SOBREPESO; OBESIDADE (GRAU): 1";
    }
    
    else if(resultadoImc >= 30 && resultadoImc <=39.9){
        document.getElementById("mensagem").innerHTML = "IMC: ENTRE 30,0 E 39,9;  CLASSIFICAÇÃO: OBESIDADE; OBESIDADE (GRAU): 2";
    }
    
    else if(resultadoImc >= 40){
        document.getElementById("mensagem").innerHTML = "IMC: MAIOR QUE 40,0;  CLASSIFICAÇÃO: OBESIDADE GRAVE; OBESIDADE (GRAU): 3";
    }
}

