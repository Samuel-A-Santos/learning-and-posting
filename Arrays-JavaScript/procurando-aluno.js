//verifica se o valor que voce passar está realmente incluido na lista que voce deseja e passa um valor booleano(true or false), por isso está dentro de um "if"
//indexOf index of é uma forma de consultar o indice que voce está procurando
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if(listaDeAlunosEMedias[0].includes(aluno)){
        // const alunos = listaDeAlunosEMedias[0]
        // const medias = listaDeAlunosEMedias[1]
        
        const [alunos, medias] = listaDeAlunosEMedias

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice]
        

        console.log(`${aluno} tem a média: ${mediaDoAluno}`)
    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Ana")
