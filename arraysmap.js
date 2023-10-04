//exercicio 1
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

//exercicio 2
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
 ];

 const nomePessoas = pessoas.map(obj => obj.nome);
 const IdadePessoas = pessoas.map(obj => ({idade: obj.idade }));
 const idPessoas = pessoas.map(function(obj, indice){
    const newObj = { ...obj };
    newObj.id = (indice + 1) * 1000;
    return newObj;
 });
 console.log('Somente Nomes', nomePessoas);
 console.log('Somente Idades', IdadePessoas);
 console.log('ID dos Itens', idPessoas);
 console.log('Array original', pessoas);
