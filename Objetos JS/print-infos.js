const cliente = {
    nome: 'samuel',
    idade: 18,
    cpf: '32813921801',
    email: 'samuel.alessandro@gmail.com'
}

console.log(`Nome do cliente é ${cliente.nome}, Idade ${cliente.idade} anos e email ${cliente.email}`)

console.log(`Se seu cpf começar com: ${cliente.cpf.substring(0,3)}, avance para a próxima página.`)