//Set() não permite que a string ou numero seja duplicado.

// const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const meuSet = new Set(nomes);

// const nomesAtualizados = [...meuSet]

// console.log(nomesAtualizados)

//uma sintaxe mais utilizada é:

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = [...new Set(nomes)]

console.log(nomesAtualizados)

//para saber mais sobre o Set e suas funcionalidades, temos a documentação:

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set
