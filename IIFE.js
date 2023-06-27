// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {

    const sobrenome = 'Victor'
    const sobrenome2 = 'Leite'
    function crianome(nome) {
        return nome + ' ' + sobrenome + ' ' + sobrenome2;
    }


function falanome() {
    console.log(crianome('Nome: João'));
}

falanome();
console.log('Idade:', idade, 'Peso:', peso, 'Altura:', altura);

})(25, 81, 1.81);


