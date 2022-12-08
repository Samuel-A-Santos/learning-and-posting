const alunos = ["Ana", "Marcos", "Maria", "Mauro", "Gabriel"];
const medias = [7, 4.5, 8, 7.5, 3.8];

const reprovados = alunos.filter((_,indice) => {
    return medias [indice] < 5 
})

console.log(`Os alunos reprovados são: ${reprovados}`)

