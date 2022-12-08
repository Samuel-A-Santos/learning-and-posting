//objetivo é fazer uma copia do array preservando o array original, mas adicionando novos termos no novo array.
//pensamento mais obvio
//neste pensamento mais obvio, a partir do momento que voce da o push nas novasNotas o javascript reconhece que as duas arrays são iguais

// const notas = [7, 7, 8, 9];

// const novasNotas = notas

// novasNotas.push(10)
// notas.push(8)

// console.log(notas)
// console.log(novasNotas)

//este é o metodo realmente eficiente:
// [...notas] = 7, 7, 8, 9
//novasNotas.push(10) pode ser substituido por const novasNotas = [...notas, 10]

const notas = [7, 7, 8, 9];

const novasNotas = [...notas]

novasNotas.push(10)

console.log(notas)
console.log(novasNotas)



