// FUNCTION

// elevar um número x a uma potência y

function calculaPotencia(num, pow) {

};


function calculaPotencia(num, pow) {
  let resultado = 1;
  for (let i = 0; i < pow; i++) {
    resultado = resultado * num;
  }
  return resultado;
};

console.log(calculaPotencia(4, 3));

//================= FUNÇÃO COM RECURSÃO ====================


// criar função que calcula o fatorial de um número usando recursão.
// fatorial: n! multiplicação de n por seus antecessores maiores ou iguais a 1
// ex: 5! = 5 x 4 x 3 x 2 x 1

// função f() é chamada pela primeira vez; na segunda execução, 
//o que foi executado na primeira vez não desaparece, mas está guardado na memória; 
// a partir disso, a função cria outra instância com os novos valores.

const fatorial = function f(num) {
  if (num === 0 || num === 1) return 1;
  return num * f(num - 1);
}

console.log(fatorial(5));


//================= ARROW FUNCTION====================

const calculaJuros = (valor, juros, tempo) => {
  let taxaJuros = (juros/100) + 1;
  return valor * Math.pow(taxaJuros, tempo);
}

console.log(calculaJuros(1000, 5, 2));

//================= CALLBACK====================

//  Aqui, calcula não sabe se vai somar ou multiplicar — 
// quem decide isso é a função que você passa (soma ou multiplica).
//Está lidando com funções dinâmicas (ex: o usuário escolhe a operação).
//Está criando código mais flexível e genérico.


function soma(a, b) { return a + b };
function multiplica(a, b) { return a * b };

function calcula(fnOperacao, valorA, valorB) {
  return fnOperacao(valorA, valorB);
}

console.log(calcula(soma, 5, 5));
console.log(calcula(multiplica, 5, 5));


const userId = '4545656';
//const avisaUsuario = userId => console.log(`sessão de ${userId} está inativa`);
//setTimeout(avisaUsuario, 2000, userId);

//ou pode usar diretamente

//setTimeout((userId) => console.log(`sessão de ${userId} está inativa`), 4000, userId);


//================= GERANDO MENSAGENS PERSONALIZADAS ====================

saudacao = (nome) => {
    if (!nome) { return console.log(`Olá! Bem vindo(a)!`)
        }
        else { return console.log(`Olá ${nome}! Bem vindo(a)!`);}
    
}

saudacao();

/* 
function saudacao(nome = "") {
    if (nome) {
      console.log(`Olá, ${nome}! Boas vindas!`);
    } else {
      console.log("Olá! Boas vindas!");
    }
  }

*/


//================= CALCULANDO DESCONTO ====================

calcularDesconto = (preco, desconto) => {

    return console.log(preco - (preco * desconto/100));

}

calcularDesconto(100, 20);

/* function calcularDesconto(preco, desconto = 10) {
    const valorFinal = preco - (preco * desconto / 100);
    return valorFinal;
}
 
console.log(calcularDesconto(100, 20)); 
console.log(calcularDesconto(100));
*/


//================= CALCULAR MÉDIA ====================

calcularMedia = (nota1, nota2) => {

    const media = (nota1 + nota2)/2;
    return media;

}

console.log(calcularMedia(8,10));

/* 

const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2;
 
console.log(calcularMedia(7, 10));

*/

//================= VERIFICA PAR OU IMPAR ====================

function verificarParidade(n) {

    if (n % 2 === 0 ) console.log("Par"); 
    else console.log("Ímpar");

}

verificarParidade(28)
verificarParidade(81)

/* 
const verificarParidade = (numero) => {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
};
 
console.log(verificarParidade(8));
console.log(verificarParidade(5)); 

*/

//================= CÁLCULO DE FRETE POR DISTÂNCIA ====================

function calcularFrete(frete) {

    if (frete <= 5) {return 5;}
    else if (frete > 5 && frete <= 20) { return (frete * 0.50);}
    else return 20;

}

console.log(calcularFrete(3));
console.log(calcularFrete(12));
console.log(calcularFrete(25));

/* 

function calcularFrete(distancia) {
    if (distancia <= 5) {
        return 5;
    } else if (distancia <= 20) {
        return distancia * 0.5;
    } else {
        return 20;
    }
}
 
console.log(calcularFrete(3));
console.log(calcularFrete(12));
console.log(calcularFrete(25));


*/


//================= MENSAGEM PÓS PROCESSAMENTO ====================

function processarPedido(nome, tipoCliente, callback) {
    console.log(`Processando pedido de ${nome}...`);
    callback(nome, tipoCliente);
}
 
function mensagemPersonalizada(nome, tipo) {
    if (tipo === "vip") {
        console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`);
    } else if (tipo === "novo") {
        console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
    } else {
        console.log(`Obrigado pela sua compra, ${nome}!`);
    }
}
 
processarPedido("Lucas", "vip", mensagemPersonalizada);
processarPedido("Moana", "comum", mensagemPersonalizada);
processarPedido("Lady Gaga", "novo", mensagemPersonalizada);


//================= MENSAGEM COM ATRASO ====================

function responderUsuario(nome, callback) {
    console.log("Processando sua pergunta...");
    setTimeout(() => {
        callback(nome);
    }, 3000);
}
 
function mostrarResposta(nome) {
    console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida.`);
}
 
responderUsuario("Camila", mostrarResposta);

//minha resposta

/*responderUsuario = (usuario) => {
   console.log(
    `Processando sua pergunta... Olá ${usuario}! Aqui está a resposta para sua dúvida`);

};

setTimeout(responderUsuario, 3000, 'Lucas'); */


//================= PONTUAÇÃO USUÁRIO ====================

//permite maior reutilização do código

function avaliarDesempenho(pontuacao, callback) {
    let status = "";

    if (pontuacao >= 70) {
        status = "aprovado";
    } else if (pontuacao >= 50) {
        status = "reforco";
    } else {
        status = "reprovado";
    }

    callback(pontuacao, status);
}

function gerarMensagem(pontuacao, status) {
    console.log(`Pontuação: ${pontuacao}`);

    if (status === "aprovado") {
        console.log("Parabéns! Você foi aprovado!");
    } else if (status === "reforco") {
        console.log("Atenção! Você precisa de reforço.");
    } else {
        console.log("Infelizmente, você foi reprovado. Tente novamente.");
    }
}

avaliarDesempenho(82, gerarMensagem);


/* function avaliarDesempenho(pontuacao, callback) {
    console.log(`Pontuação: ${pontuacao}`);
    callback(pontuacao);
}
 
function gerarMensagem(pontuacao) {
    if (pontuacao >= 70) { 
        console.log(`Parabéns, você é o nosso MVP!`);}
    else if (pontuacao <= 69 && pontuacao >= 50) { 
        console.log(`Precisa de reforço! Que tal estudar novamente?`);}
    else  { 
         console.log(`Não tem jeito! Você foi reprovado`);
} 
}
 
avaliarDesempenho(82, gerarMensagem);
avaliarDesempenho(55, gerarMensagem);
avaliarDesempenho(20, gerarMensagem); */


//================= CONSUMO ELETRICO ====================


function calcularConsumo(potencia, horasPorDia) {
    console.log((potencia * horasPorDia * 30) / 1000)
}

function classificarConsumo(consumo) {
    if (consumo < 50 ) {
        console.log("Baixo consumo");
    } else if (consumo >= 50 && consumo < 200) { console.log("Consumo moderado")}
    else { console.log("Alto consumo")}
}

function exibirResumo(nomeAparelho, consumo, classificacao) {
        return console.log(`${nomeAparelho} tem consumo de ${consumo} 
            kWh/mês e é classificada como ${classificacao} `)

} 

const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);
exibirResumo(nomeAparelho, consumo, classificacao);