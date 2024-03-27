function trocaCor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
                                
    document.body.style.backgroundColor = "#" + randomColor;
   
}

  
  
/*
Math.random(): Esta função retorna um número aleatório entre 0 e 1.
Math.random() * 16777215: Gera um valor aleatorio de 0 a 1 e depois multiplica por 16777215 -> Multiplica o número aleatório pelo maior valor que uma cor hexadecimal pode ter (FFFFFF em hexadecimal, que é 16777215 em decimal). Isso garante que a cor gerada será dentro do intervalo de cores RGB.
Math.floor(): Arredonda o número (no caso, arredonda o numero aleatorio (Math.random()) depois de multiplicado por 16777215) para o menor número inteiro mais próximo, para ter certeza de que é um número inteiro.
.toString(16): Converte o número inteiro (já arredondado pelo Math.floor()) em uma representação hexadecimal. Isso é importante porque os códigos de cor hexadecimal só aceitam números inteiros.


Suponha que Math.random() gera o número 0.5.

Math.random(): Gera 0.5.
Multiplicação por 16777215: 0.5 * 16777215 = 8388607.5
Math.floor(): Arredonda para o inteiro mais próximo, o que é 8388607.
.toString(16): Converte para hexadecimal, resultando em "7FFFFF".
Portanto, no exemplo acima, o número gerado aleatoriamente 0.5 é convertido em "7FFFFF" em hexadecimal, que é uma representação válida de uma cor.

*/
