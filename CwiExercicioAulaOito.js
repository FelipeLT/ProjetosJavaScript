// Aula 8 - Estruturas de repetição

// Exercicio 1 Carros que eu gosto: 
/*Crie um array de 5 posições com quaisquer valores. Utilize qualquer estrutura de repetição apresentada no vídeo para exibir todos os valores do array;*/
/*
carros = ["Renegate","tracker","HRV","ASX","Ecosport"]
rank = 0

while (rank < carros.length) {
  console.log(rank, carros[rank])
  rank++
} */

// Exercicio 2
/* Crie um algoritmo capaz de calcular a média aritmética de um array com qualquer quantidade de elementos numéricos.*/
/*
venda = [100, 200, 300, 350, 400, 450, 500, 600, 700, 900]
index = 0
somaVenda = 0
totalIndex = venda.length

do { 
  console.log (venda[index])
  index++
} while (index < venda.length)

for (index=0; index < venda.length; index++) {
  somaVenda += venda[index]
}

media = somaVenda / totalIndex

console.log ("A media é:",media)
*/

// Exercicio 3 
/* Considerando a lista dos 60 nomes mais comuns no Brasil nos últimos 10 anos, crie um algoritmo para verificar se seu nome está lá. Se sim, exiba a mensagem: É, nome comum :P. Se não, exiba a mensagem: Diferentão, hein? XD.*/

meuNome = "Felipe"
nomeComun = false

nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia","Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia","Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara","Henrique", "Valentina","Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia","Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda","Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

// Resolução 1
for (index=0; index < nomesComuns.length; index++) {
  if (meuNome == nomesComuns[index]) { 
    nomeComun = true
    break;
  }
}
if (nomeComun) {
  console.log ("É, nome comum :P")
} else { console.log ("Diferentão, hein? XD")
}

// Resolução 2
/*
if(nomesComuns.indexOf("Felipe") === -1){
    console.log("Diferentão, hein? xD");
}else{
    console.log("É, nome comum :P");
}*/