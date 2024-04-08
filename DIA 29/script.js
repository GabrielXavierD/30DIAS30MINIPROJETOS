let currentPlayer = document.querySelector(".currentPlayer");
let selected;
let player = "X";

let positions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
   /*array com vários mini arrays dentro*/ 

function init(){
    selected = [] /*var selected inicia como array vazio*/

    currentPlayer.innerHTML = `O jogador da vez é: ${player}`; /*O inicial é o X*/

    /*selecionando todos os botões da div com class .game*/
    /*forEach -> para cada botão quando for inicializado vai começar com o innerHTML vazio -> nada preenchido*/ 
    document.querySelectorAll(".game button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", newMove);
      });
    }

init();

function newMove(e){ /*recebe o evento referente ao botão*/ 
    const index = e.target.getAttribute("data-i") /*recebendo atributo data-i, se clicar no 1o btn retorna o 1 */
    e.target.innerHTML = player; /*passando a informação do player no innerHTML do botão
        Ex: se for o atual player o X e ele clicar em um botão, irá sera atribuido como texto desse botao um X */

        e.target.removeEventListener("click", newMove); /*removendo o evento click desse botao, da função newMove, pra nao poder clicar no mesmo botao dnv e ficar adicionando X ou O*/
        selected[index] = player; /*armazena os itens já selecionados, armazena no index do botao -> Ex. botao 1 = armazena no array selected na posição um o player que selecionou*/

    setTimeout(() => { 
        check(); /*executada depois que a ultima linha for executada*/
     }, [100]);

     player = player === "X" ? "O" : "X";
     currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;


function check() {
    let playerLastMove = player === "X" ? "O" : "X";
  
    const items = selected /*mapenado itens selecionados*/ 
      .map((item, i) => [item, i]) /*gerando novo array com o item*/
      .filter((item) => item[0] === playerLastMove) /*quais itens selecionados batem com o ultimo player*/
      .map((item) => item[1]); /*mapeia o index (posição 1) */
  
    for (pos of positions) { /*verifica atraves do every se os itens selecionados do ultimo player, eles tem o item dessa posição */
      if (pos.every((item) => items.includes(item))) {
        alert("O JOGADOR '" + playerLastMove + "' GANHOU!"); /*se tiver um ganhador mostra o ultimo player */
        init(); /*inicializa o game */
        return; /*retorna*/
      }
    }
  
    if (selected.filter((item) => item).length === 9) { 
    /*verifica se deu empate, atraves de filter nos itens selecionados, 
    verifica se há 9 itens selecionados, se sim, da um alert, inicializa e retorna */
      alert("DEU EMPATE!");
      init();
      return;
    }
  }

}