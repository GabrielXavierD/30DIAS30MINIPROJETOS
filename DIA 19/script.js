let tempo = Number(0);

function iniciar(){
   let tempo =  document.getElementById("tempo").value;
    if (tempo > Number(0)){
        let dtempo = Number(tempo) - Number(1);
        document.getElementById("tempo").value = dtempo;

    }
    setInterval(function () {
        iniciar();}, 1000);

}