const notas = [10, 6.5, 8, 7.5];

let someDasNotas = 0;

for (let nota of notas) {
    someDasNotas += nota
}

const media = someDasNotas / notas.length

console.log(`A media das notas é: ${media}`)