// =================== FOR ==============================

// Gerar números aleatórios de 1 a 50 e
// Interromper o laço caso o número gerado seja 15.
// Interromper depois de 30 tentativas e contar a quantidade de tentativas.

//const numero = Math.floor(Mathe.random() * (50 - 1 + 1) + 1);
//Math.floor(Math.random() * (max - min + 1) + min)

//Dica: o operador de módulo (%) retorna o resto da divisão do primeiro 
// pelo segundo número.


for (let contador = 1; contador <= 30; contador++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if (numero === 15) {
        console.log(`${numero} em ${contador} tentativas`);
        break;
    }
}


// Gerar números aleatórios de 1 a 50
//Criar um contador que só é incremetado caso os números não seja divisíveis por 5
//No final, exibir o valor do contador;

let contador = 0;

for (let i = 1; i <= 30; i++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);

    console.log(`Tentativa ${i}: número gerado = ${numero}`); //adicionei apenas para ver o processo, como se fossa uma auditoria.

    if (numero % 5 === 0) {
        continue;
    }
  
    contador++;
}

console.log(`Total de números válidos (não múltiplos de 5): ${contador}`);


// =================== WHILE ==============================

//Gerar um laço que tente "adivinhar" um dado número de 1 a 50
// e conte a quantidade de tentativas até o resultado

const numeroSecreto = 8;
let numeroAleatorio = 0;
let tentativas = 0;

while (numeroSecreto !== numeroAleatorio) {
    numeroAleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    tentativas++;
}

console.log(`adivinhou em ${tentativas} tentativas`);

// =================== DO WHILE ==============================

// Gerar um laço que tente "adivinhar" um dado número de 1 a 50
// e conte a quantidade de tentativas até o resultado

let numeroRandom = 0;

do {
    numeroRandom = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    console.log(numeroRandom); //auditoria;
} while (numeroRandom % 2 !== 0);

console.log(numeroRandom);

// =================== LENGTH ==============================

// criar um laço que recebe um texto e verifica se é um palíndromo
// imprimir no console o texto, informando se é ou não palíndromo
//os arrays são considerados cadeia de caracteres, 
// eles são contados, começando no número 0

//const texto = 'alura!';
// const texto = 'arara';
 const texto = 'luz azul';

let textoInvertido = '';

for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
}

console.log(textoInvertido);

const result = texto.replace === textoInvertido.replace //o replace remove o espaço entre as palavras
    ? `${texto} é palíndromo`
    : `${texto} não é palíndromo`;
        
console.log(result);


// =================== NUMERO FINAL ==============================

const numeroFinal = 5;

for (let i = 1; i <= numeroFinal; i++) {
    console.log(i);
}

// =================== CONTAGEM REGRESSIVA ==============================

const contagemRegressiva = 0;
const mensagem = "Lançar!"

for (let i = 10; i >= contagemRegressiva; i--) {
    console.log(i);
   
}
 console.log(mensagem);

 // =================== LISTANDO NÚMEROS PARES ==============================

 //Começar com i = 1 é útil quando você quer contar como um humano, 
 // //e começar com i = 0 é útil quando você quer acessar posições de uma lista, 
 // como um programador.

const numFinal = 10;
 
for (let i = 1; i <= numFinal; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

 // =================== EXIBINDO CARACTERES ==============================

 const senha = 'seguranç@2025';

for (let i = 0; i < senha.length; i++) {
  console.log(`Caractere ${i + 1}: ${senha[i]}`);
}


 // =================== SOLICITANDO NOMES ==============================

 //o while foi usado porque não tem um número fixo de repetições.
 //testa a condição e depois executa
 // do while faz e depois testa a condição;


const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];
let i = 0;
 
while (entradas[i] !== "fim") {
  console.log("Nome:", entradas[i]);
  i++;
}

/*
SOLUÇÃO COM O FOR 

 const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];

for (let i = 0; i < entradas.length; i++) {
  if (entradas[i] === "fim") break;
  console.log("Nome:", entradas[i]);
}

*/
//================== VERIFICANDO ACESSO RESTRITO ================

const contagem = 20;
const aviso = 'Número proibido encontrado! Encerrando...'

for (let i = 1; i <= 20 ; i++) {

    if ( i === 10 ) break;
    console.log(i);

}

console.log(aviso);


//================== SOMANDO NUMEROS ================

//do...while garante pelo menos uma execução, mas for é mais direto quando o número de dias é fixo.

const totalDias = 10;
let dia = 1;
let economia = 0;
 
do {
  economia += dia;
   console.log(`Dia ${dia}: economizou R$${dia} (Total acumulado: R$${economia})`)
  dia++;
} while (dia <= totalDias);
 
console.log(`Total economizado: R$ ${economia}`);

/*

com o for

const totalDias = 10;
let economia = 0;

for (let dia = 1; dia <= totalDias; dia++) {
  economia += dia;
}

console.log(`Total economizado: R$ ${economia}`);

*/

//================== TEMPORIZADOR DE AQUECIMENTO ================

//  precisamos garantir que o bloco de código seja executado pelo menos uma vez
//   do...while é ideal para esse tipo de situação onde a repetição precisa acontecer 
// pelo menos uma vez antes da condição ser testada.

const tempoMinimo = 5;
const temperaturaIdealAlcancadaEm = 3;
 
let segundos = 0;
 
do {
    segundos++;
    console.log(`Aquecendo... segundo ${segundos}`);
 
    if (segundos === temperaturaIdealAlcancadaEm) {
        console.log("Temperatura ideal atingida.");
    }
 
} while (segundos < tempoMinimo);
 
console.log(`Tempo total de aquecimento: ${segundos} segundos`);


//================== REGISTRO DE CAIXAS PROCESSADAS ================

const caixas = [12, -1, 8, 0, -5, 3, 7, 14];
let processadas = 0;
 
for (let i = 0; i < caixas.length; i++) {
  let valor = caixas[i];
 
  if (valor < 0) {
    console.log("Caixa danificada, ignorada.");
    continue;
  }
 
  console.log(`Caixa processada: ${valor}`);
  processadas++;
 
  if (processadas === 5) {
    console.log("Limite de caixas processadas atingido!");
    break;
  }
}

//================== VALIDAÇÃO LOGIN ================

const tent = ["1234", "admin", "secreto"];
const senhaCorreta = "secreto";

/*let i = 0;
let acessoLiberado = false;

while (i < tentativas.length && i < 3) {
  if (tentativas[i] === senhaCorreta) {
    console.log("Acesso permitido!");
    acessoLiberado = true;
    break;
  } else {
    console.log(`Tentativa ${i + 1} inválida.`);
  }
  i++;
}
 
if (!acessoLiberado) {
  console.log("Acesso bloqueado. Número máximo de tentativas atingido.");
} */
