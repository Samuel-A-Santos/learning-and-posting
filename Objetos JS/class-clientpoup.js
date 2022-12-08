class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

class clientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo) //propriedades que deseja herdar
        this.saldoPoupanca = saldoPoupanca
    }
    
    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const samuel = new clientePoupanca('samuel','samuel@gmail.com','21312321321',100,800)

console.log(samuel)

samuel.depositar(300)
samuel.depositarPoupanca(2200)

console.log(samuel)
