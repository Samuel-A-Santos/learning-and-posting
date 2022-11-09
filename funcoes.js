// let x = '';
// console.log(x)
// x = 'oi';

// 1 forma, declaração de função, forma mais classica

// primeiro bloco para declarar a função.
function imprimeTexto(texto){
    console.log(texto)
}

// segundo, executa a função no momento que voce quer.

imprimeTexto(soma());
// imprimeTexto('Outro texto desejado');

// tres formas de escrever funções

function soma(){
    //outros codigos
    //console.log()
    //qualquer codigo que queira
    return 2 + 10;
}

// console.log(soma())











//Funções matematicas

Math.round();
// Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.

// Math.round(4.3) retorna 4
// Math.round(3.85) retorna 4
// Math.round(2.5) retorna 3, quando o número termina com 0.5 a função arredonda para cima

Math.ceil();
// Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).

// Math.ceil(5.2) retorna 6

Math.floor();
// Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).

// Math.floor(5.2) retorna 5

Math.trunc();
// Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.

// Math.trunc(4.3) retorna 4
// Math.trunc(4.8) retorna 4

Math.pow();
// Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.

// Math.pow(4 , 2) retorna 4^2 = 16
// Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...

Math.sqrt();
// Math.sqrt() : Retorna a raiz quadrada de um número.

// Math.sqrt(64) retorna 8

Math.min();
// Math.min(): Retorna o menor valor entre os argumentos.

// Math.min(0, 150, 30, 20, -8, -200) retorna -200

Math.max();
// Math.max(): Retorna o maior valor entre os argumentos.

// Math.max(0, 150, 30, 20, -8, -200) retorna 150


Math.random();
// Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.

// Math.random() retorna 0.7456916270759015
// Math.random() retorna 0.15449802102729304
// Math.random() retorna 0.4214269561951203


