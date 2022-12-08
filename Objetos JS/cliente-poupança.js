function Cliente(nome,cpf,email,saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup)
{
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const sam = new clientePoupanca("sam","21312214421","sam@gmail.com",300,200)

// console.log(sam)

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

sam.depositarPoup(40)

console.log(sam.saldoPoup)