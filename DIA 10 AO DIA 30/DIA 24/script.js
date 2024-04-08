const btnToggle = document.getElementById('btnToggle');
const ingredientes = document.querySelector('.ingredientes');
const instrucoes = document.querySelector('.instrucoes');

btnToggle.addEventListener('click', function () {
  if (ingredientes.style.display === 'none') {
    ingredientes.style.display = 'block';
    instrucoes.style.display = 'block';
    btnToggle.textContent = 'Ocultar Ingredientes e Instruções';
  } else {
    ingredientes.style.display = 'none';
    instrucoes.style.display = 'none';
    btnToggle.textContent = 'Mostrar Ingredientes e Instruções';
  }
});
;
