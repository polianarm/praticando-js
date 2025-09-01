// IF/ELSE
//Definir um fluxo para somar ou multiplicar dois nýmeros usando if/else

const num1 = 2;
const num2 = 4;
const operacao = 'multiplicação';

if (operacao === 'soma') {
    console.log(num1 + num2);
} else if (operacao === 'multiplicação') {
    console.log(num1 * num2);
} else {
    console.log('Operação não identificada');
}

//============================IF COM PORCENTAGEM ==================================

// localizar o nivel de bônus de acordo com a faixa salarial 
// ex: $11000 e acima: 3% de bônus 
// $10999 a $7000: 5% de bônus 
// $ 6999 a $4008: 7% de bônus 
// $3999 p baixo: 9% de bônus 

const salarіо = 2000;

if (salario >= 11000) {
    console.log('3% de bônus');
} else if (salario < 11000 && salario >= 7000) {
    console.log('5% de bônus');
} else if (salario < 7000 && salario >= 4000) {
    console.log('7% de bônus');
} else {
    console.log('9% de bônus');
}

//=========================CALCULO IDADE PARA DIRIGIR==============================

/*const idade = 18;

if (idade >= 18) {
    console.log('pode dirigir'); 
} else if ( idade >=17) {
    console.log('pode procurar a auto escola');
} else {
    console.log ('abaixo da idade mínima');
    };
*/

const idade = 18;
const possuiCNH = true;

if (idade >= 18 && possuiCNH) {
    console.log('pode dirigir');
} else {
    console.log('não pode dirigir');
}

//=====================CALCULO ANO BISSEXTO============================

// se ele for divisivel por 4 e for divisivel por 100 = vai pro outro bloco
//se ele não for divisivel por 4 e for divisivel por 100 = vai pro outro bloco
//se ele não for divisivel por 100, ele não pode ser divisivel por 400

// deve ser divisível por 4 mas NÃO divisível por 100
// OU
// deve ser divisível por 100 e por 400

const ano = 1995;
// const ano = 2000;
// const ano = 2022;
// const ano = 1992;

if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)) {
    console.log(`${ano} é bissexto`);
} else {
    console.log(`${ano} não é bissexto`);
}