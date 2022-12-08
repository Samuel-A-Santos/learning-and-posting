const cliente = {
    nome: 'samuel',
    idade: 18,
    cpf: '32813921801',
    email: 'samuel.alessandro@gmail.com',
    phone: ['6199982312','61992764910']
}
cliente.dependentes = {
    nome:'sofia',
    parentesco:'filha',
    dataNasc:'12/05/2015'
}

console.log(cliente)

cliente.dependentes.nome = 'sofia santos'

console.log(cliente)
