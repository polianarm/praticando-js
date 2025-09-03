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


**==================== ARRAYS ===========================**

Conceito: arrays são coloções ordenadas de valores.
Cada valor é chamado elemento e tem sua posição na lista determinada por um índice.
No jS o javaScripe começa sempre em 0.
O javaScript permite diferentes tipos de dados no array

Sintaxe
```javascript

const arr = [ elemento, elemento, elemento, elemento, elemento ];

const arrNumeros = [1, 2, 3];
const arrMisto = [5, true, 'texto'];

//Array de arrays
const arrArrays = [[1, 2], ['a', 'b', 'c'], [true, false]];

//Array com objetos dentro

const arrObjetos = [{ a: 1 }, { b: 2 }, { c: 3 }];

//Manipulando arrays

//                   0   1   2   3
const arrNumeros = [46, 34, 23, 12];

console.log(arrNumeros[0]); // 46
console.log(arrNumeros[1]); // 34
console.log(arrNumeros[2]); // 23
console.log(arrNumeros[3]); // 12

//Reatribuindo valores no array

arrNumeros[1] = 36;

// Se quisermos adicionar um novo elemento no final do array, podemos atribuir um valor a um índice que ainda não existe:
arrNumeros[4] = 100;
console.log(arrNumeros);
//[ 46, 36, 23, 12, 100 ]
```


***----------------------- MANIPULANDO ARRAY COM FOR ----------------------------**


```javascript
const arrNumeros = [46, 34, 23, 12];

for (let i = 0; i < arrNumeros.length; i++) {
    console.log(arrNumeros[i]);
}


//o for irá percorrer o array linha por linha. Irá acessar cada índice do array
//Para parar um array usando o for, devemos lembrar da propriedade .length. 

for (let i = 0; i < arrNumeros.length; i++) {
    arrNumeros[i] = arrNumeros[i] * 10; //reatribução de valores ao elemento
}

//[ 460, 340, 230, 120 ]
console.log(arrNumeros);

const estudantes = ["JULIANA", "aline", "SOLANGE"];

for (let i = 0; i < estudantes.length; i++) {
    estudantes[i] = estudantes[i].toUpperCase();
}

// [ 'JULIANA', 'ALINE', 'SOLANGE' ]
console.log(estudantes);

```

***------------------------------ FOR OF -----------------------------------**
```javascript

// funciona com qualquer iterável do JavaScript. Iteráveis incluem arrays, strings e algumas outras estruturas de dados, como mapas e conjuntos (maps e sets)

//Podemos simplesmente percorrer um array e realizar operações dentro dele. A sintaxe é semelhante à do for original: começaremos com for, abriremos parênteses, mas agora, em vez de três instruções, teremos apenas uma.

const arrayNumeros = [18, 95, 45, 76, 23, 99];

for (let numero of arrayNumeros) {
    if (numero + 10 > 100 || numero > 100) continue;
    console.log(numero + 10);
}
```
```javaScript
function criaArrNum(inicio, fim) {
  const arr = [];
  let elemento = inicio;

  for(let i = 0, j = 0; j < fim; i++, elemento++) {
    arr[i] = elemento;
    j = elemento;
  }
  return arr;
}

```
Entendendo o papel de i e j

Na função criaArrNum(), as variáveis i e j desempenham papéis distintos, mas complementares, para a criação do array com a sequência numérica desejada.

i como índice do array: A variável i é utilizada como um índice para percorrer o array que está sendo criado. Ela começa em 0 e é incrementada a cada iteração do loop (i++). O valor de i indica a posição em que um novo elemento será inserido no array.

j como elemento numérico: A variável j é utilizada para controlar a sequência numérica que será inserida no array. Ela começa com o valor inicial desejado (inicio) e é incrementada a cada iteração do loop (elemento++). O valor de j representa o número que será inserido na posição i do array.

Exemplo prático

Vamos supor que você queira criar um array com os números de 5 a 10. Nesse caso, a função criaArrNum() seria chamada da seguinte forma:

cpp
Copiar código
console.log(criaArrNum(5, 10));
Dentro da função, o loop for seria executado da seguinte maneira:

Inicialização: i = 0, j = 5
Condição: j < 10 (verdadeiro)
Inserção: arr[0] = 5
Atualização: i++, elemento++ (agora i = 1 e j = 6)
Condição: j < 10 (verdadeiro)
Inserção: arr[1] = 6
Atualização: i++, elemento++ (agora i = 2 e j = 7)
Repetição: O loop continua até que j seja igual a 10.
Resultado: O array final será [5, 6, 7, 8, 9, 10]
Analogia

Imagine que você está montando um quebra-cabeça. A variável i representa a posição da peça que você vai colocar no quebra-cabeça, enquanto a variável j representa o número da peça que você vai encaixar nessa posição. Você começa colocando a peça número 5 na primeira posição, depois a peça número 6 na segunda posição, e assim por diante, até completar o quebra-cabeça.


***--------------------------- MÉTODOS COM ARRAY -----------------------------------**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#static_methods

.push - Adiciona um ou mais elementos ao final de um array.

```javascript
const arrNumeros = [12, 23, 34, 45, 56];
arrNumeros.push(67);
console.log(arrNumeros); // Saída: [12, 23, 34, 45, 56, 67]
```

.pop -  Remove o último elemento de um array.

```javascript
const arrNumeros = [12, 23, 34, 45, 56];
arrNumeros.pop();
console.log(arrNumeros); // Saída: [12, 23, 34, 45]
```

.indexOF - Retorna o primeiro índice em que um determinado elemento pode ser encontrado no array. Caso o elemento não esteja presente, retorna -1.

```javascript
const arrNumeros = [12, 23, 34, 45, 56];
const indice = arrNumeros.indexOf(34);
console.log(indice); // Saída: 2

```
.slice - Retorna uma cópia de uma parte do array, em um novo array.

```javascript
const arrNumeros = [12, 23, 34, 45, 56];
const novoArr = arrNumeros.slice(2);
console.log(novoArr); // Saída: [34, 45, 56]

```
Métodos comfunções callback 

.map - Cria um novo array com os resultados de uma função aplicada a cada elemento do array original.

```javascript
const arrNumeros = [12, 23, 34, 45, 56];
const arrCalculado = arrNumeros.map(num => num * 10);
console.log(arrCalculado); // Saída: [120, 230, 340, 450, 560]
```

.forEach - Executa uma função para cada elemento do array.

```javascript
const arrNumeros = [12, 23, 34, 45, 56];
arrNumeros.forEach((num, i) => {
  console.log(`O número ${num} está no índice ${i}`);
});
// Saída:
// O número 12 está no índice 0
// O número 23 está no índice 1
// O número 34 está no índice 2
// O número 45 está no índice 3
// O número 56 está no índice 4

```
.filter - Cria um novo array com todos os elementos que passam em um teste implementado por uma função.

```javascript
const arrNumeros = [12, 23, 34, 45, 56];
const arrFiltrado = arrNumeros.filter(num => num % 5 === 0);
console.log(arrFiltrado); // Saída: [45]
```

**==================== OBJETOS ===========================**

Conceito: Objetos são coleções não ordenadas de valores - ao contrário de arrays, que são coleções ordenadas. Eles são organizados em pares de chave-valor.
O termo "propriedade" serve para denominar as pares de chave-valor, que não são funções, ou seja, onde o valor seja um dado.

Estrutura:

```javascript
const obj = {
  chave: valor,
  chave: valor,
  chave: valor
};

const cliente = {
  nome: 'Joana A',
  cpf: '12345678987',
  email: 'j@j.com',
};

//Um objeto também pode ter arrays como valores.

const cliente = {
  nome: 'Joana A',
  cpf: '12345678987',
  email: 'j@j.com',
  score: 865,
  recorrente: true,
  endereco: {
    logradouro: 'Rua A',
    num: '125A',
    complemento: 'apto 24',
    //restante endereco
  },
  tags: ['premium', 'clube'],
};

const clientes = [
  {
    nome: 'Joana A',
    cpf: '12345678987',
    email: 'j@j.com',
  },
  {
    nome: 'Bruno B',
    cpf: '23456789123',
    email: 'b@b.com',
  },
  {
    nome: 'Carlos M',
    cpf: '56789012345',
    email: 'c@c.com',
  },
];

//Para acessar o nome do cliente e incluí-lo em uma saudação, utilizamos cliente.nome. Isso retornará o valor que está associado à chave nome que, nesse caso, é a string com o nome da pessoa.

console.log(cliente.nome); //string
console.log(cliente.score); //número
console.log(cliente.endereco); //objeto
console.log(cliente.tags); //array

console.log(cliente.endereco.logradouro); //string

//a chave tags, que é um array de strings, podemos entrar em cliente.tag no índice 0 para retornar a string da primeira posição desse array.
console.log(cliente.tags[0]); //string

//add propriedades

cliente.celular = '5511999999999';
console.log(cliente);

//A notação de colchetes, especialmente útil quando a chave é um texto com espaços.
const cliente = {
  'nome completo': 'Joana A',
  cpf: '12345678987',
  email: 'j@j.com',
};

console.log(cliente['nome completo']);

//Acessando dados variáveis
//cliente, que possui uma chave nome. A partir do momento que essa chave sai da estrutura de objetos, ela precisa ser usada como string. Nesse caso, criamos uma variável para armazenar essa chave para simular que o nome dessa chave vem de outro lugar.

const descrChave = 'nome';

const cliente = {
  nome: 'Joana A',
  cpf: '12345678987',
  email: 'j@j.com',
};

console.log(cliente[descrChave]); //Joana A
```

***----------------------- MÉTODOS OBJETOS-------------------------------**
Objetos também podem receber como valor de uma chave, uma função. O método pode interagir com as propriedade.

Métodos são funções que sempre são executadas no contexto do objeto. Assim, essa função pode interagir com as demais propriedades desse objeto.

O this é uma palavra-chave que serve para manter o contexto de execução da função ao objeto.

```javascript
const cliente = {
  nome: 'Joana A',
  score: 865,
  recorrente: true,
  tags: ['premium', 'clube'],
  saudarCliente: function() {
    console.log(`boas vindas, ${this.nome}`);
  }
};

cliente.saudarCliente();
//boas vindas, Joana A

const cliente = {
  nome: "Joana A",
  score: 865,
  recorrente: true,
  tags: ["premium", "clube"],
  saudarCliente() {
    console.log(`boas vindas, ${this.nome}`);
  }
};

cliente.informarScore = function informarScore() {
  console.log(`seu score é ${this.score}`);
};

cliente.informarScore();
//seu score é 865

```


***----------------------- MÉTODOS OBJETCT-------------------------------**

Object.keys(objeto) - Retorna um array contendo todas as chaves (nomes das propriedades) do objeto.

```javascript
const chaves = Object.keys(objeto);
console.log(chaves); // Output: ['chave1', 'chave2', ...]

const cliente = {
  nome: 'Joana A',
  cpf: '12345678987',
  email: 'j@j.com',
  score: 865,
  recorrente: true,
  tags: ['premium', 'clube'],
};

console.log(Object.keys(cliente));
// Saída: ['nome', 'cpf', 'email', 'score', 'recorrente', 'tags']


```

Object.values(objeto) - Retorna um array contendo todos os valores das propriedades do objeto.

```javascript
const valores = Object.values(objeto);
console.log(valores); // Output: [valor1, valor2, ...]
```

Object.entries(objeto) - Retorna um array de arrays, onde cada sub-array contém um par chave/valor do objeto.

```javascript
const entradas = Object.entries(objeto);
console.log(entradas); // Output: [['chave1', valor1], ['chave2', valor2], ...]

console.log(Object.entries(cliente));
// Saída: [['nome', 'Joana A'], ['cpf', '12345678987'], ['email', 'j@j.com'], ['score', 865], ['recorrente', true], ['tags', ['premium', 'clube']]]
```

for...in - uma estrutura de repetição que permite iterar sobre todas as propriedades enumeráveis de um objeto.

```javascript
for (const chave in objeto) {
  console.log(chave, objeto[chave])
}

const cliente = {
  nome: 'Joana A',
  cpf: '12345678987',
  email: 'j@j.com',
  score: 865,
  recorrente: true,
  tags: ['premium', 'clube'],
};

for (const info in cliente) {
  const texto = `chave ${info}, valor do tipo ${typeof cliente[info]}`;
  console.log(texto);
}

```