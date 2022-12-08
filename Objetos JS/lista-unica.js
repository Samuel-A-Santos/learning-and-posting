const cliente = [
{
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
    }]
    },
    {
      nome: "Juliana",
      cpf: "56767867867",
      dependentes: [{
        nome: "Miguel",
        parentesco: "filho",
        dataNasc: "30/08/2020"
       }],
    } 
  ]

  const listaDependentes = [...cliente[0].dependentes,...cliente[1].dependentes]

  console.table(listaDependentes)