//bom para reescrever elementos de arrays;
const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) =>nome.toUpperCase());

console.log(nomesPadronizados);

// const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// const nomesPadronizados = nomes.map((nome) => {
//  return nome.toUpperCase();

//  });

//  console.log('nomesPadronizados');

//diferença entre for.each() e map()
// Certo! Enquanto o método forEach não tem um retorno, o método map() pode retornar um array se a função callback retornar algum valor.