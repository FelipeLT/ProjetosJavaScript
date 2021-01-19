
// Aula 9

// Exercício 1
/* Crie uma função chamada imprimir que recebe um argumento e simplesmente imprime ele na tela;*/

function imprimir(v) {
  console.log(v);
}

// Exercicio 2
/*Crie uma variável mesmoNome que verifica se nomeDoFulano é igual a nomeDoBeltrano;*/

function mesmonome (nome1,nome2) {
  return nome1==nome2
}

// Exercicio 3
/* Crie uma variável maiorDeIdade que verifica se idade é de um adulto; */

function maioridade (idade) {
  return idade>=18
}

// Exercicio 4
/* Crie uma variável valorComJuros que calcula o valor de um boleto acrescido de 10% de juros por atraso;*/

function juros (boleto) {
  return (boleto*1.1).toFixed(2)
  }

// Exercício 5
/*Faça a representação da fórmula de média aritmética, considerando um conjunto de elementos com 5 elementos nomeados como item1, item2, item3, item4 e item5;*/

function mediavalor (itens) {
  soma = 0;
  for (i=0; i<itens.length; i++) {
  soma += itens[i];
  }
  return soma/itens.length;
}

// Exercicio 6
/* O lucro bruto de uma empresa é representado pela receita líquida de vendas menos o custo dos produtos vendidos. A margem bruta de uma empresa é calculada pela divisão do lucro bruto pela receita líquida de vendas. Faça a representação da fórmula da margem bruta, multiplicando o resultado final por 100 para obter o valor percentual;*/

function margem (receita,custo) {
  return (((receita-custo)/receita)*100).toFixed(1)
}



// Executando os códigos

cwi = "CWI"
reset = "Reset"
imprimir(mesmonome(cwi, cwi))   // true
imprimir(mesmonome(cwi, reset)) // false

imprimir("---")

imprimir(maioridade(30)) // true
imprimir(maioridade(18)) // true
imprimir(maioridade(5))  // false

imprimir("---")

imprimir(juros(100))   // 110
imprimir(juros(984.5)) // 1082.95

imprimir("---")

imprimir(mediavalor([1]))             // 1
imprimir(mediavalor([1, 4, 10]))      // 5
imprimir(mediavalor([1, 2, 3, 4, 5])) // 3

imprimir("---")

imprimir(margem(1000000, 500000))      // 50
imprimir(margem(528459.11, 632501.87)) // -19.68[...]*/