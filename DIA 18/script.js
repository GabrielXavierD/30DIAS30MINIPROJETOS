function gorjeta() {
    let valorConta = document.getElementById("valorConta").value;
    let porcentagemConta = document.getElementById("porcentagemConta").value;
    let resultado = valorConta * porcentagemConta / 100;
    document.getElementById("resultadoGorjeta").value = resultado;


    let valorTotal = Number(valorConta) + Number(resultado);
    document.getElementById("valorTotal").value = valorTotal;

}