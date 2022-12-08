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

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
        // console.log(Object.values(cliente)) Para o valor da chave.
    }
}

oferecerSeguro(cliente)