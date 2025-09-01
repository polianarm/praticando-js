//operador ternário// operador condicional
// switch/case - break (parada) - quando tem uma lista de possibilidades além do if else

//TERNÁRIO

const saudacao = nome ? `olá, ${nome}` : 'olá, pessoa';
console.log(saudacao); // olá, Fernando

// SWITCH CASE // só funciona para valores exatos (não é feito o if que pode faixas de valor)

switch (avaliacao) {
    case 5:
        console.log('avaliação ótima');
        break;
    case 4:
        console.log('avaliação boa');
        break;
    case 3:
        console.log('avaliação neutra');
        break;
    default:
        console.log('avaliação baixa');
        break;
}

//=====================BONUS NA NOTA=========================

// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas. 
const nome = "Roberta";
const nota = 8;
const faltas = 2;

const recebeBonus = (nota >= 8) && (faltas <= 2)
    ? `${nome} recebe bônus`
    : `${nome} não recebe bônus`;
    console.log(recebeBonus);

//===================TIPO DE USUARIO E ACORDO=========================

// criar um fluxo que identifica o tipo de pessoa usuária e comunica de acordo.
// ex: pessoa usuária free tem acesso limitado ao app
//     pessoa usuária premium tem acesso a todas as funções
//     pessoa usuária super premium tem acesso total e bônus especiais

const user = 'premium';

switch(user){
  case 'free':
    console.log('acesso limitado');
    break;
  case 'premium':
    console.log('acesso total ao app');
    break;
  case 'super premium':
    console.log('acesso total ao app e bônus');
    break;
  case 'super premium':
    console.log('tipo de user desconhecido');
    break;
}


//===================ACESSO LIBERADO=========================

const idade = 20

const liberaAcesso = idade >= 18 ? 'Acesso permitido' : 'Acesso negado'; 
    console.log(liberaAcesso);

//===================TEMPERATURA=========================

const temperatura = 22;

if (temperatura < 15) {
  console.log("Frio");
} else if (temperatura >= 15 && temperatura <= 25) {
  console.log("Agradável");
} else {
  console.log("Quente");
}

//===================FAIXA ETÁRIA ESCOLAR========================

const faixaEtaria = 15;

if (faixaEtaria < 12) {
  console.log("Infantil");
} else if (faixaEtaria >= 12 && faixaEtaria < 18) {
  console.log("Juvenil");
} else {
  console.log("Adulto");
}

//===================ABERTURA DA LOJA=======================

const diaDaSemana = 2;

if (diaDaSemana > 0 && diaDaSemana < 6) {
    console.log("A loja está aberta no horário normal: 9h às 18h.");
} else {
    console.log("A loja está aberta em horário especial: 10h às 14h.");
}

// outra forma de resolução

/*
const diaSemana = 6;
 
if (diaSemana === 6 || diaSemana === 0) {
  console.log("A loja está aberta em horário especial: 10h às 14h.");
} else {
  console.log("A loja está aberta no horário normal: 9h às 18h.");
}

*/

//===================LOGIN=======================

const usuario = "admin";

const mensagem = (usuario === "admin") ? "Login bem-sucedido!" : "Usuário inválido.";

console.log(mensagem);

//===================LOGIN=======================

const fruta = 'maracujá';

const frutaPermitida = (fruta === 'laranja' || fruta === 'abacaxi') 
    ? "Fruta compatível com a receita"
    : "Acho melhor não usar essa fruta";
    console.log(frutaPermitida);

// outra forma de resolução

/*
const fruta = "maçã";
 
if (fruta !== "laranja" && fruta !== "abacaxi") {
  console.log("Fruta incompatível para a receita.");
} else {
  console.log("Fruta compatível para a receita.");
}
*/

//==================CARRINHO DE COMPRAS======================

const carrinhoVazio = false;

const liberaCompra = (!carrinhoVazio) 
    ? "Compra finalizada com sucesso" 
    : "Não é possível finalizar a compra: carrinho vazio";
    console.log(liberaCompra);

// outra forma de resolução

/* 

const carrinhoVazio = false;

if (!carrinhoVazio) {
  console.log("Compra finalizada com sucesso!");
} else {
  console.log("Não é possível finalizar a compra: carrinho vazio.");
}

*/

//==================VERIFICAÇÃO DE PAGAMENTO======================   

const pagamento = 'aprovado';

switch (pagamento) {
    case 'pendente':
        console.log('Pagamento pendente');
        break;
    case 'aprovado':
        console.log('Pagamento aprovado');
        break;
    case 'recusado':
        console.log('Pagamento recusado');
        break; 
}


//==================NEXT LEVEL======================   

const qtdPontos = 60;
const qtdVidas = 1;

const nextLevel = ((qtdPontos > 50) && (qtdVidas >= 1)) 
    ? "Congratulations! Próximo nível liberado" 
    : "Oh não...! Tente mais uma vez!";
    console.log(nextLevel);

//==================NÍVEL DE BATERIA======================  

// UTILIZAÇÃO DE MAIS DE 2 CONDICIONAIS EM UM TERNÁRIO

const bateria = 10;
 
const statusBateria = (bateria < 20) 
  ? "Crítica" 
  : (bateria <= 80) 
    ? "Moderada" 
    : "Cheia";
 
console.log(statusBateria);