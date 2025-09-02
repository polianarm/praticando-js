**==================== CONDICIONAIS ============================**

O que é uma condicional?

Sintaxe da condicional IF

```javascript
if (expressao) {

    vá por esse caminho

} else {

    vá por outro caminho 
};

```
Exemplo

Qualquer condicional é avaliada em termos de true ou false
/ 
if 
else if
else

```javascript
const idade = 189;

if (idade >= 18) {
    console.log('pode dirigir'); 
} else if ( idade >=17) {
    console.log('pode procurar a auto escola');
} else {
    console.log ('abaixo da idade mínima');
    };
```

**=========================== OPERADORES ===============================**

OPERADORES DE COMPARAÇÃO
OPERADORES LÓGICOS - TABELA DA VERDADE
&& (AND) 
|| (OU)
! (NOT - operador de negação)

O JavaScript avalia qualquer valor como verdadeiro (truthy) ou falso (falsy), 
mesmo que não sejam do tipo booleano.

Por exemplo, se a variável possuiCNH tiver o valor 'true' (uma string, e 
não o booleano true), ainda assim ela será avaliada como verdadeira em uma 
condição if. Isso porque qualquer string não vazia é um valor truthy.

**=========================== TERNÁRIO ===============================**

const saudacao = nome ? `olá, ${nome}` : 'olá, pessoa';
console.log(saudacao); // olá, Fernando

A condição;
O caso verdadeiro;
O caso falso.

```javascript
const nome = "Fernando";
let saudacao;

if (nome) {
    saudacao = `olá, ${nome}`;
} else {
    saudacao = 'olá, pessoa';
}
```

**=========================== SWITCH-CASE ===============================**

 A diferença entre o switch-case e o if-else é que, no if-else, 
 temos condições intermediárias, conhecidas como else ifs.

Cada else if requer uma condição específica. Quando elencamos muitos else ifs, 
o código pode se tornar difícil de entender. O switch-case, por outro lado, 
é útil quando temos uma lista de possibilidades para o condicional, além de if e else.

Outra diferença é que, enquanto o if-else avalia uma expressão que retorna true ou 
false, o switch trabalha com valores.

```javaScript
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
```

**==================== LAÇOS DE REPETIÇÃO ============================**

Sintaxe
incialização: executada uma única vez antes do laço começar;
condição: avaliada antes de cada iteração. Se for true, o laço continua; 
Se for false, o laço para.
atualização: executada após cada iteração do laço.
*Nenhuma delas é obrigatória.

As variáveis dentro do for, são recriadas a cada laço.

```javascript
for (inicialização ; condição; atualização) {



}
```

Exemplo: 

```javascript
const numero = 5;

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}
```


PROBLEMA: LOOP INFINITO.
*Empilhando instruções até o momento em que a memória não consegue mais executar.
Após iniciar o laço, o programa só continua executando o restante do código 
quando finalizar as iterações do laço.

```javascript
const numero = 5;

for (let i = 1; i <= 10; ) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}\n`);
}

```
Formas de resolução: 
break (pode interromper o laço)

```javascript
for (let contador = 1; contador <= 50; contador++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if (numero === 15) {
        console.log(`${numero} em ${contador} tentativas`);
        break;
    }
}
```

continue (interrompe a próxima iteração)

```javascript
let contador = 0;

for (let i = 1; i <= 20; i++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if (numero % 5 === 0) {
        continue;
    }
    contador++;
}
console.log('contador', contador);
```


**==================== WHILE ============================**

Deve ser uma expressão que retorne valores booleanos, podendo ser true ou false.

A condição no while significa que, enquanto for verdadeira, 
o bloco de código será executado. No entanto, ao contrário do for, 
que possui ferramentas internas para manejar a quantidade de repetições, 
o while não possui essa funcionalidade.

Podemos resumir dizendo que o for é utilizado quando queremos especificar 
a quantidade de repetições, enquanto o while executa enquanto a condição 
for verdadeira, sem especificar a quantidade de iterações. 
Se quisermos definir uma condição de parada, devemos fazê-lo fora do laço. 
Por exemplo, podemos criar um contador igual a zero.

```javascript
while (condição) {
    // bloco de código
}
```

EXEMPLO

```javascript
let numeroSecreto = 8;
let numeroAleatorio = 0;
let contador = 0;

while (numeroSecreto !== numeroAleatorio) {
    numeroAleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    contador++;
}
```

console.log(`adivinhou em ${contador} tentativas`);

**==================== DO WHILE ============================**

O do while funciona de maneira semelhante ao while, 
mas com uma diferença importante: enquanto o while, assim como o for, 
pode não entrar na primeira iteração caso a condição já seja falsa, 
o do while garante que, pelo menos uma vez, o bloco de código será executado.

```javascript
do {
    // bloco de código
} while (condição);
```

EXEMPLO

```javascript
let numeroRandom;

do {
    numeroRandom = Math.floor(Math.random() * (50 - 1 + 1) + 1);
} while (numeroRandom % 2 !== 0);

console.log(numeroRandom);
```

**==================== .LENGTH ============================**

A propriedade .length está presente em todos os arrays e strings. 
Ela é útil porque nos permite verificar, por exemplo, 
o tamanho de um array ou, no caso de uma string, a quantidade de 
caracteres que ela possui.

sempre podemos saber o tamanho de um array ou de uma parada.

const palavra = "papagaio"; 

```javascript
for (i=0; i < palavra.length; i++) { 
    console.log(palavra[i]); 
}; 
```


**==================== FUNÇÕES ============================**

Conceito: blocos de código reutilizáveis e que executam uma tarefa específica.
começamos com a palavra-chave function, seguida do nome da função, que representa uma ação relacionada à tarefa a ser executada.

Uma função pode receber parâmetros entre parênteses, que são opcionais. Os parâmetros são os dados que a função precisa para executar corretamente.

Em seguida, abrimos um bloco de código com chaves, onde definimos o que deverá ser executado. A última instrução no escopo desse bloco é o retorno, que pega os valores processados e os retorna para o ponto onde a função foi chamada.

Estrutura:

```javaScript
function nomeDaFuncao (parâmetro(s)) {

//bloco de código
    retorno

}

function darBoasVindas (nome) {
    return `Boas vindas, ${nome}`;
}

darBoasVindas('Solange');
console.log(darBoasVindas('Juliana'));
```

Se a função executa algum tipo de instrução, mas não precisa retornar um valor para o ponto onde é chamada, não é necessário retorno.


```javaScript
function darBoasVindas() {
    console.log('olá, boas vindas!');
}

darBoasVindas();
```

Situação	                Começa com i = 0	Começa com i = 1
Arrays, listas	                    ✅	              ❌
Repetir ação n vezes	            ✅ (i < n)	      ❌ (i <= n repete 1 vez a mais)
Contagens humanas (1º, 2º...)	    ❌	              ✅
Evitar zero	                        ❌	              ✅
Cálculos que ignoram o zero	        ❌	              ✅

***------------------------- EXPRESSÃO DE FUNÇÃO ----------------------------**

Expressão de função =/= de função; As expressões de função são frequentemente atribuídas a variáveis, mas também podem fazer parte de expressões maiores, sem obrigatoriedade de estarem ligadas a uma variável.. 
São anonimas. 
Justificativa do uso: essas funções não são içadas para o topo do arquivo no início do carregamento. Isso significa que uma função anônima só passa a "existir" para o código após o programa ler as linhas e chegar à linha onde a função é declarada. Nesse momento, o valor da função é resolvido à direita do operador de atribuição = e passado para uma variável.

```javascript
const nomeVariavel = function ( parâmetro(s) ) {
    // bloco de código
    retorno
}

const imprimeOlaMundo = function() {
  console.log('olá, mundo!');
};

//Compactando expressões de função

const boasVindas = function(nome) { return `olá, ${nome}` };
```

***------------------------- FUNÇÃO RECURSIVA ----------------------------**
Função recursiva: Uma função recursiva chama a si mesma para executar de forma iterativa até não precisar mais.
As funções fatoriais podem ser bastante eficientes, mas é preciso ter cuidado com valores muito grandes de forma recursiva, pois todas as instâncias e valores calculados permanecem na memória do programa.

```javascript
const fatorial = function f(num) {
  if (num === 0 || num === 1) return 1;
  return num * f(num - 1);
}

console.log(fatorial(5)); // 120
```


***------------------------- ARROW FUNCTION ----------------------------**

As arrow functions têm uma sintaxe mais compacta do que as expressões e declarações - e são sempre anônimas.

```javascript

const nomeVariavel = (parâmetros) => {
  // bloco de código
  retorno
}


const fatorial = (num) => {
  if (num === 0 || num === 1) return 1;
  return num * fatorial(num - 1);
};


const boasVindas = nome => `olá, ${nome}`;
```

**================= CALLBACK====================**


```javaScript

setTimeout(exibeFrase, 5000);

function exibeFrase() {
    console.log('olá, mundo');
}
```

O javaScript trata função como objeto, isso permite que se coloque funções em variáveis e passe funções para outras funções.
Como o callback. 
Cuidado com o que é mais fácil de ler. Então, nem sempre o arrow function torna isso mais fácil. Se for usar essa função em outros lugares
pode acabar tornando mais confuso.
Dominar o que é uma função e para que ela serve. 
Passar como variável se torna mais legivél.. Enfim, pode ser relativo. 
Função: bloco de código que executa algo dentro dele. 
Ele vai ser reutilizado? será usado completo.
Se for colocado em outra função: setar numa variável. 
Há possibilidades e diferenças para ter a capacidade para melhor usar. 
Nem fazer tudo arrow function, e nem tudo function completa. Entender o que é cada coisa. 