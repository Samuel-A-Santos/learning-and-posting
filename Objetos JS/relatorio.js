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
     nome:'sara',
     parentesco:'filha',
     dataNasc:'12/05/1995'
    }
  ],
  saldo:100,
  depositar:function(valor)
  {
    this.saldo += valor
  }
}

let relatorio = ''

for (info in cliente){
    if(typeof cliente[info] === 'object' || typeof cliente [info] === 'function')
    {
        continue
    }else{
        relatorio += `
        ${info} - ${cliente[info]}
        `
    }
}

console.log(relatorio)


