//for each entrega o valor do elemento e tambem o seu indice ao contrario do for-of que entrega so o valor

const notas = [10, 6.5, 8, 7.5];

let someDasNotas = 0;

notas.forEach(function(nota,){
    someDasNotas += nota
});

const media = someDasNotas / notas.length

console.log(`A media das notas é: ${media}`)