const cliente = {
    nome: 'samuel',
    idade: 18,
    cpf: '32813921801',
    email: 'samuel.alessandro@gmail.com',
    phone: ['6199982312','61992764910'],
    dependentes: [
    {
     nome:'sofia',
     parentesco:'filha',
     dataNasc:'12/05/2015'},
    {
     nome:'kelly',
     parentesco:'mãe',
     dataNasc:'12/05/1995'
    }
  ],
  saldo:100,
  depositar:function(valor)
  {
    this.saldo += valor
  }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)


