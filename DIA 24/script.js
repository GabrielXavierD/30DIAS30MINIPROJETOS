// Função para sortear um número aleatório entre 1 e 100
function sortearNumero() {
  return Math.floor(Math.random() * 100) + 1;
}

// Função principal para executar quando o botão é clicado
function simularSorteio() {
  // Sortear um número
  var numeroSorteado = sortearNumero();

  // Exibir o número sorteado na página
  document.getElementById('numeroSorteado').textContent = "Número Sorteado: " + numeroSorteado;
}

// Adicionando um ouvinte de evento para o botão de sorteio
document.getElementById('btnSortear').addEventListener('click', simularSorteio);
