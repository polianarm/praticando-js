// ARRAY
// pratique construindo arrays e acessando seus elementos através dos índices

const arr = [1, 2, 3, 4];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

//o js permite que o array tenha espaços vazios.

arr[5] = 10;
console.log(arr);

//[1, 2, 3, 4, <empty item>, 10]


//================= FOR ====================

// criar um array com uma sequência de números entre x e y
//fim não é um índice, é um elemento.

function criaArrNum(inicio, fim) {
  const arr = [];
  let elemento = inicio;

  for(let i = 0, j = 0; j < fim; i++, elemento++) {
    arr[i] = elemento;
    j = elemento;
  }
  return arr;
}

console.log(criaArrNum(12, 30));


//================= CLONAR ARRAY - FOR EACH ====================


// clonar array multidimensional com "deep copy"
// por que não podemos clonar arrays via variável?
//Se criarmos arr2 e atribuirmos o valor de arr1 a ela, 
// quando modificarmos o valor de arr1, ambos os arrays serão alterados, 
// pois com const arr2 = arr1, em vez de copiar o dado, criamos uma referência 
// ao ponto na memória onde arr1 está.

const copiaArray = (arr) => {
  const copia = [];
  arr.forEach((elem) => {
    if (Array.isArray(elem)) {
      copia.push(copiaArray(elem));
    } else {
      copia.push(elem);
    }
  })
  return copia;
}

const arr2 = copiaArray(arr1);
arr1[0][0] = 5;

console.log(arr1);
console.log(arr2);



//================= MAP ====================

// filtrar um array e alterar valores específicos
// ex: alterar números para strings

const cpfs = ['12323434545', '34658756786', 43254365434, '76547865345', 56768767564];

const result = cpfs.map((cpf) => {
  if (typeof cpf === 'string') {
    return cpf;
  } else {
    return cpf.toString();
  }
})

console.log(result);

//SIMPLIFICAÇÃO COM O TERNÁRIO

//const cpfs = ['12323434545', '34658756786', 43254365434, '76547865345', 56768767564];
//const result = cpfs.map(cpf => typeof cpf === 'string' ? cpf : cpf.toString());
//console.log(result);


//================= ACESSANDO E MODIFICANDO ELEMENTOS ====================

const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];
console.log("Segundo item da lista:", listaDeCompras[1]);
listaDeCompras[listaDeCompras.length - 1] = 'fruta';
console.log("Lista após modificação:", listaDeCompras);

/* Como eu fiz

const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];
listaDeCompras[3] = 'fruta';

console.log(`O segundo item da lista é: ${listaDeCompras[1]}`);
console.log(listaDeCompras[3]);
console.log(`Lista após modificação: ${listaDeCompras}`); */


//================= PERCORRENDO LISTA COM FOR ====================

const despesas = [120, 80, 45.5, 200, 60];
 
let total = 0; //criação de variaveis para acumulação de valores
 
for (let i = 0; i < despesas.length; i++) {
  total += despesas[i];
}
 
console.log(`Total de despesas: R$ ${total}`);

/*
const despesas = [120, 80, 45.5, 200, 60];
let soma = 0;

for (let i = 0; i < despesas.length; i++) {
    soma += despesas[i]; //soma = soma + numeros[i]
}

//com o método reduce

const soma = despesas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(soma); */

//================= PERCORRENDO LISTA COM FOR ====================

const estudantes = ['Carla', 'João', 'Marina', 'Lucas', 'Beatriz'];

for (let i = 0; i < estudantes.length; i++) {
    console.log("Estudantes:", estudantes[i]);
}

/* 

const estudantes = ['Carla', 'João', 'Marina', 'Lucas', 'Beatriz'];

for (const nome of estudantes) {
  console.log("Estudante:", nome);
}

*/

//================= LISTA DE MENSAGEM ====================

const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];

mensagens.forEach((i) => {console.log(`Notificação: ${i}`)});

/* 
const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];

mensagens.forEach(msg => {
  console.log("Notificação:", msg);
});
*/

//for - quando precisa do indice ou controle manual do laço (pode acessar o indice)
//for... - quando quer apenas os valores, sem se preocupar com a posição (não pode acessar o indice diretamente)
//forEach() - quando quer executar algo para cada item, sem precisar de retorno (pode acessar o indice, 2 parametro)

//================= REMOVENDO E ADD ITENS DA LISTA ====================

const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];

tarefas.push('Tomar banho'); 
console.log("Lista após adicionar:", tarefas);

tarefas.pop();
console.log("Lista após remover:", tarefas);

//================= CLONANDO UM ARRAY ====================


const pedidos = ['camiseta', 'calça', 'tênis'];

const pedidosCopia = pedidos.slice();

pedidosCopia.push('boné');

console.log("Array original:", pedidos);
console.log("Array copiado:", pedidosCopia);

/*

const pedidos = ['camiseta', 'calça', 'tênis'];

const copiaPedidos = (arr) => {
      const copia = [];
      arr.forEach((elem) => {
        if (Array.isArray(elem)) {
            copia.push(copiaPedidos(elem));
        } else {copia.push(elem);

        }

    })
     return copia;
}

const pedidos2 = copiaPedidos(pedidos);
pedidos[0] = 'colar';


 console.log(pedidos);
 console.log(pedidos2); */

 //================= BUSCANDO PEDIDOS NUMA LISTA ====================

const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
const livroProcurado = 'O Cortiço';

if (livros.indexOf(livroProcurado) !== -1) {
  console.log(`O livro "${livroProcurado}" está disponível.`);
} else {
  console.log(`O livro "${livroProcurado}" não foi encontrado.`);
}

//================= TRANSFORMANDO DADOS COM O MAP ====================

const precos = [100, 80, 50, 120];

const precosDesconto = precos.map(num => num * 0*9); 
console.log("Preços com desconto:", precosDesconto)

//================= FILTRANDO VALORES ====================

const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
];

const autorizados = participantes.filter(p => {
  p.idade >= 18 ? console.log(`Acesso liberado para: ${p.nome}`) : false;
  return p.idade >= 18;
});

const aprovados = autorizados.map(p => p.nome);

console.log("Lista de aprovados:", aprovados);

//================= CONTROLE DE PRODUTOS ====================

//OBS: Esse exercicio não fiz, ainda preciso revisar. Logo, não vou explicar.
//Esta aqui apenas para quando puder refazer e compreender

const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];

let relatorio = ''; 
let produtosMaisVendidos = ''; 
 
let totalPorProduto = ''; 
 
const maisLucrativo = { nome: '', totalVendas: 0 }; 
 
produtos.forEach(prod => { 
 
  const totalVendidoProduto = prod.preco * prod.quantidadeVendida; 
 
  relatorio += `Produto: ${prod.nome} | Preço: ${prod.preco} | Quantidade vendida: ${prod.quantidadeVendida}\n`; 
 
  if (prod.quantidadeVendida > 100) { 
 
    produtosMaisVendidos += `${prod.nome}\n` 
 
  } 
 
  totalPorProduto += `${prod.nome}: R$ ${totalVendidoProduto}\n`; 
 
  if (totalVendidoProduto > maisLucrativo.totalVendas) { 
 
    maisLucrativo.nome = prod.nome; 
 
    maisLucrativo.totalVendas = totalVendidoProduto; 
 
  }  
 
}) 
 
console.log('Relatório de produtos vendidos:'); 
 
console.log(relatorio); 
 
console.log('Produtos com alto volume de vendas (> 100 unidades):'); 
 
console.log(produtosMaisVendidos); 
 
console.log('Total de vendas por produto:'); 
 
console.log(totalPorProduto); 
 
console.log('Produto mais lucrativo:'); 
 
console.log(`${maisLucrativo.nome} com R$ ${maisLucrativo.totalVendas} em vendas.`);

