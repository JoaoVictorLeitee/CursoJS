// Filter, map, reduce

// exercicio 1
 const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
 const numerosFiltrados = numeros.filter(valor => valor > 10);
 console.log('Números maiores que 10', numerosFiltrados);
console.log('  ')

// exercicio 2
 const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
 ];
 const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
 const pessoasComIdadeMaior = pessoas.filter(obj => obj.idade > 50);
 const pessoasNomeComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
 });
 console.log('Pessoas que terminam com a letra A', pessoasNomeComA);
 console.log('Pessoas com o nome maior que 5 itens', pessoasComNomeGrande);
 console.log('Pessoas com a idade maior que 50 anos', pessoasComIdadeMaior);