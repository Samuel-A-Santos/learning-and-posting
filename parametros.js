// parametro de função

function soma(numero1, numero2){
    return numero1 + numero2;
}

// console.log(soma(10, 404))
// console.log(soma(-600, 229))
// console.log(soma(204, 554))

// parametos x argumentos

// ordem dos parametros

function nomeIdadeCidade(nome, idade, cidade){
    return `meu nome é ${nome}, minha idade é ${idade} e nasci em ${cidade}`
}

//note que se inverto a ordem da string dentro do console.log, a ordem do texto imprimido sai errada, exemplo se declaro minha idade antes de declarar meu nome ficaria meu nome é 18 e minha idade é samuel
console.log(nomeIdadeCidade("samuel", 18, "minas gerais"))

function multiplica(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))

