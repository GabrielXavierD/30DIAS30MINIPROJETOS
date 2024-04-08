function like() {
    let nLikes = parseInt(document.getElementById("inputLike").value);
    let addLike = Number(nLikes) + 1; // Não é necessário usar Number() duas vezes aqui
    document.getElementById("inputLike").value =  addLike + ' Likes';
}



