// Aula 6 - Condicionais
// Exercicio
/*O cálculo do IMC é feito pela divisão do peso de alguém pela sua altura ao quadrado. Faça um algoritmo que efetue o cálculo do IMC, com base nas variáveis peso e altura. Exiba o valor do IMC e a classificação obtida. Se houver algum grau de obesidade, exiba também a mensagem: Cuidado! Você está acima do peso recomendado pela OMS. Se o grau de obesidade for 3, adicione também a seguinte mensagem: É importante procurar um médico para avaliar sua saúde.
IMC	/                    Classificação /	Grau de Obesidade
Menor do que 18,50	     Magreza	        0
Entre 18,50 e 24,99	     Normal	          0
Entre 25,00 e 29,99	     Sobrepeso	      1
Entre 30,00 e 39,99	     Obesidade	      2
Maior ou igual a 40,00	 Obesidade grave	3
*/

//Resolução 

peso = 80
altura = 1.72 * 2
imc = (peso / altura).toFixed(2)
classe = ""
if (imc < 18.5) {classe = 'Magreza'}
else if (imc >= 18.5 && imc <= 24.99) {classe = 'Normal'}
else if (imc >= 25 && imc <= 29.99) { classe = 'Sobrepeso'}
else if (imc >= 30 && imc <= 39.99) { classe = 'Obesidade'}
else { classe = 'Obesidade Grave'}
console.log("Seu IMC é: " + imc + " e sua classificação é: " + classe)
if (imc >= 25 && imc <= 39.99) {console.log ("Cuidado! Você está acima do peso recomendado pela OMS")}
else if (imc > 39.99) {console.log ("É importante procurar um médico para avaliar sua saúde")}
else  {console.log ("Saúde ok")} */