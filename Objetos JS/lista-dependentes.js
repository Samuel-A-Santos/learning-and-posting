const cliente = {
    nome: 'samuel',
    idade: 18,
    cpf: '32813921801',
    email: 'samuel.alessandro@gmail.com',
    phone: ['6199982312','61992764910']
}
cliente.dependentes = [{
    nome:'sofia',
    parentesco:'filha',
    dataNasc:'12/05/2015'
}]

cliente.dependentes.push({
    nome:'kelly',
    parentesco:'mãe',
    dataNasc:'12/05/1995'
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependentes => dependentes.dataNasc === '12/05/2015')

console.log(filhaMaisNova[0].nome)