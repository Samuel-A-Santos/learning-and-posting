const notas = [10, 6.5, 8, 7.5];

let someDasNotas = 0;

for (let i = 0;i < notas.length; i++) {
    someDasNotas += notas[i]
}

const media = someDasNotas / notas.length

console.log(`A média das notas é: ${media} `);