const pessoa = {
    nome: 'Roberta R',
    nascimento: '2020-01-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};

console.log(pessoa.nome);

console.log(pessoa.trofeus[0]);

delete pessoa.cpf;

console.log(pessoa);

//ITERAR TROFÉUS

function exibeTrofeus(listaTrofeus) {
    for (const trofeu of listaTrofeus) {
        console.log(`tem o troféu ${trofeu}`);
    }
}

exibeTrofeus(pessoa.trofeus);

//================== MÉTODO CALCULA IDADE AO OBJETO ================

// adicione ao obj um método para calcular a idade da pessoa e retornar o valor no terminal como string.

const user = {
    nome: 'Roberta R',
    nascimento: '1996-01-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};

user.calculaIdade = function calculaIdade() {
    const anoNasc = parseInt(this.nascimento.slice(0, 4)); // o indice 4 é para nao cortar nenhum elemento
    const idade = new Date().getFullYear() - anoNasc;
    console.log(`A idade é ${idade}`);
    //console.log(typeof anoNasc, typeof idade); typeOf é para saber o tipo //O JS forçou a conversão da string para number, mas não é uma boa pratica
}

user.calculaIdade();
console.log(user);

//================== ACESSANDO ARRAYS E IMPRIMINDO RESULTADO ================

// acesse um array de objetos e imprima no terminal os nomes e status de ativação de cada pessoa.

const clientes = [
    {
        nome: 'Marina M',
        ativo: true,
    },
    {
        nome: 'Rafael R',
        ativo: false,
    },
    {
        nome: 'Fabio F',
        ativo: false,
    },
];

for (const cliente of clientes) {
    const status = cliente.ativo ? 'ativo' : 'inativo';
    console.log(`status cliente ${cliente.nome}: ${status}`);
}

//================== OBJETO COM DADOS DE UM PRODUTO ================

const produto = {
    nome: 'Fone de ouvido',
    preco: 149.9,
    disponivel: true,
};

console.log(produto);

//=============== ACESSANDO DADOS COM PONTOS E COLCHETES ================

const configuracoes = {
  tema: 'escuro',
  notificacoes: true,
  idioma: 'pt-BR'
};

console.log("Tema:", configuracoes.tema);          
console.log("Idioma:", configuracoes['idioma']);   

//=============== ARRAYS DENTRO DE OBJETOS ================

const receita = {
  nome: "Bolo de Cenoura",
  ingredientes: ["cenoura ralada", "açúcar", "farinha de trigo", "ovos", "fermento"],
  tempoPreparo: "45 minutos"
};

console.log("Ingrediente complementar:", receita.ingredientes[2]);

//=============== REMOVENDO UMA PROPRIEDADE ================

const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2022,
  modeloAntigo: 'Corolla XEi'
};

delete carro.modeloAntigo;

console.log(carro);

//=============== ITERANDO UM ARRAY DE OBJETOS ================

const dispositivos = [
  { nome: 'Impressora', status: 'ativo' },
  { nome: 'Scanner', status: 'inativo' },
  { nome: 'Projetor', status: 'ativo' }
];

for (const dispositivo of dispositivos) { //Para cada dispositivo dentro do conjunto chamado dispositivos, faça alguma coisa
  console.log(`Dispositivo: ${dispositivo.nome} | Status: ${dispositivo.status}`);
}


//=============== CRIANDO MÉTODOS DENTRO DE UM OBJETO ================

const maquina = {
  nome: 'Esteira Transportadora',
  funcionando: true,
  exibirStatus: function () {
    if (this.funcionando) {
      console.log(`A máquina ${this.nome} está em funcionamento.`);
    } else {
      console.log(`A máquina ${this.nome} está parada.`);
    }
  }
};

maquina.exibirStatus();


//=============== MONTANDO UM OBJETO A PARTIR DE CHAVE-VALOR ================

// transforma uma lista de pares (como mini-arrays com dois elementos) 
// em um objeto JavaScript.

function montarObjeto(arrPares) {
    const resultado = {};
 
    for (const [chave, valor] of arrPares) {
        resultado[chave] = valor;
    }
 
    return resultado;
}
 
const dados = [
    ['nome', 'João'],
    ['idade', 30],
    ['cidade', 'Curitiba']
];
 
console.log(montarObjeto(dados));

//======================= SISTEMA DE INSPEÇÃO ======================

const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30
};

const categorias = Object.keys(relatorio);
const valores = Object.values(relatorio);
const entradas = Object.entries(relatorio);

console.log("Categorias avaliadas:", categorias);
console.log("Valores registrados:", valores);

console.log("\nDetalhamento:");
for (let [chave, valor] of entradas) {
  const status = valor > 50 ? "alerta" : "ok";
  console.log(`${chave}: ${valor} (${status})`);
}

//=================== GERANDO RELATÓRIO DE MANUTENÇÃO ======================

const manutencao = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7
};

let totalDias = 0;
let mesesComParada = 0;

for (let mes in manutencao) {
  const dias = manutencao[mes];
  totalDias += dias;

  if (dias > 0) {
    mesesComParada++;
  }
}

console.log(`Total de dias parados: ${totalDias}`);
console.log(`Meses com manutenção registrada: ${mesesComParada}`);

if (totalDias > 20) {
  console.log("Status: Atenção! Acima do limite anual.");
} else {
  console.log("Status: Dentro do limite anual");
}

//======================= ANALISANDO DESEMPENHO ======================

const curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "João", progresso: 85 },
    { nome: "Ana", progresso: 40 },
    { nome: "Juliano", progresso: 72 },
    { nome: "Patrícia", progresso: 60 }
  ],

  gerarRelatorio: function () {
    let totalProgresso = 0;

    for (let estudante of this.estudantes) {
      const situacao = estudante.progresso >= 70 ? "Aprovado" : "Em andamento";
      console.log(`Estudante: ${estudante.nome} | Progresso: ${estudante.progresso}% | Situação: ${situacao}`);
      totalProgresso += estudante.progresso;
    }

    const media = (totalProgresso / this.estudantes.length).toFixed(2);

    console.log(`\nTotal de estudantes: ${this.estudantes.length}`);
    console.log(`Média geral da turma: ${media}%`);
  }
};

curso.gerarRelatorio();