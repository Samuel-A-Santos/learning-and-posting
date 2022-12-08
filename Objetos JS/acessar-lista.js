const cliente = {
    nome: 'samuel',
    idade: 18,
    cpf: '32813921801',
    email: 'samuel.alessandro@gmail.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email']

// const chaves = 'nome'

console.log(cliente[chaves[0]])

// console.log(cliente[chaves])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente['nome'])