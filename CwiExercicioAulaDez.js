/* OBJETIVO
Criar uma função chamada verificarAposentadoria, que recebe um nome como argumento e verifica se aquele colaborador pode se aposentar. A função deve imprimir uma mensagem dizendo "Parabéns, já pode sair de férias eternas :)" ou "Infelizmente para você, ainda falta um tempo :(". Caso seja informado o nome de um colaborador que não existe, deve ser apresentada a mensagem "Colaborador inválido :|".
Use os arrays abaixo para considerar as informações de colaboradores, idade e tempo de trabalho:
*/

// Variaveis 

colaboradores = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio','Rosiméri', 'Regislane', 'Agripino', 'Wellison']
idades = [69, 66, 58, 61, 60, 64, 59, 55]
temposDeTrabalho = [31, 29, 30, 26, 25, 24, 26, 29]


// Funções 

function verificarAposentadoria (nome) {
  nomeColaborador = false;

  for (index=0; index<colaboradores.length; index++) {

  if (nome == colaboradores[index]) {
    nomeColaborador = true;
    break;
    }
  }  
  if (nomeColaborador) {
    if (idades[index]>= 65) {
      console.log ("Parabéns, já pode sair de férias eternas :)" + " - Atende Regra 1" )}
    else if (temposDeTrabalho[index]>=30) {
      console.log ("Parabéns, já pode sair de férias eternas :)" + " - Atende Regra 2" )}
    else if (idades[index]>=60 && temposDeTrabalho[index]>=25) {
      console.log ("Parabéns, já pode sair de férias eternas :)" + " - Atende Regra 3" )}
    else { console.log ("Infelizmente para você, ainda falta um tempo :(") 
    }
  }

  else {console.log ("Colaborador inválido :|")}
}
    

// Execução 

verificarAposentadoria('Felipe');
verificarAposentadoria('Rosiméri');    // true (regra 3)
verificarAposentadoria('Agripino');   // false (falta 1 ano de idade para regra 3)
verificarAposentadoria('Rhoger')      // true (todas)
verificarAposentadoria('Hudnélson')   // false (colaborador inexistente)
verificarAposentadoria('Gleysberto')  // true (regra 2)
verificarAposentadoria('Regislane')   // false (falta 1 ano de idade para regra 1 e 1 de trabalho para regra 3)
verificarAposentadoria('Cléverson')   // true (regras 1 e 3)

verificarAposentadoria('Nádio')       // true (regra 3)
verificarAposentadoria('Wellison')    // false (falta 1 ano de trabalho para regra 2)
verificarAposentadoria('Florisberto') // false (colaborador inexistente)


// Resoluções alternativas 

//Resolução 1
/*
function verificarAposentadoria(nomeDeColaborador){
  index=0;
  colaborador=false; 
  for(i=0;i<colaboradores.length;i++){
    
    if(nomeDeColaborador==colaboradores[i]){
      
      colaborador = true;
      index=i;
      break;
    }
  }
  if(colaborador){
    
    if(idades[index]>=65){
      console.log("Parabéns, já pode sair de férias eternas:", colaboradores[i],"- Regra 1");
    
    }else if(temposDeTrabalho[index]>=30){
        console.log("Parabéns, já pode sair de férias eternas:", colaboradores[i],"- Regra 2");
     
    }else if(idades[index]>=60 && temposDeTrabalho[index]>=25){
        console.log("Parabéns, já pode sair de férias eternas:", colaboradores[i],"- Regra 3");
  
    }else{
        console.log("Infelizmente para você ainda falta um tempo :(");
      }
  
  }else{
     console.log("Colaborador inexistente!");
   }
  
}*/

// Resolução 2
/*
function verificarAposentadoria(nome){ 

  for(i=0;i<=colaboradores.length;i++){

    if(nome == colaboradores[i]){
      if(idades[i]>=65||temposDeTrabalho[i]>=30||(idades[i]>=60 && temposDeTrabalho[i]>=25)){
      console.log("Parabéns, já pode sair de férias eternas :)");
      break;
      }else{
      console.log("Infelizmente para você, ainda falta um tempo :(");
      break;
      }
    }else if(i==colaboradores.length){
      console.log("Colaborador inválido :|");
    }
  }
}*/

// Resolução 3
/*
function imprimir(i){
  console.log(i)
}

function verificarAposentadoria(nome){

    funcionario = false

    for (index = 0; index < colaboradores.length; index++) {
        if (nome == colaboradores[index]){ 
              funcionario = true
              idade = idades[index]
              tempo = temposDeTrabalho[index]
        }
    } 
  
    if(funcionario){
        
        caso01 = idade >=65
        caso02 = tempo >=30
        caso03 = idade >=60 && tempo >=25

        if(caso01 == true || caso02 == true || caso03 == true){
              imprimir("Parabéns, já pode sair de férias eternas :)")
        }else{
              imprimir("Infelizmente para você, ainda falta um tempo :(")
            }  
    }else{
        imprimir("Colaborador inválido :|")
  }
return funcionario

}

let resultadoAposentadoria = verificarAposentadoria('Cléverson')  
imprimir(resultadoAposentadoria)*/

// Resolução 4 
/*
function verificarAposentadoria(nome) {
	var funcionario;
	
	function buscaFuncionario(nome) {
		var existe = false;
		for (i=0; i<colaboradores.length; i++) {
			if (nome == colaboradores[i]) {
				existe = true;
				break;
			}
		}
		if (existe) { 
		funcionario = i;
		}
		return existe;
	}
	
	if (!(buscaFuncionario(nome))) {
		console.log("Colaborador inválido :|");
	} else if (buscaFuncionario(nome)) {
		regra1 = idades[funcionario]>=65;
		regra2 = temposDeTrabalho[funcionario]>=30;
		regra3 = (idades[funcionario]>=60 && temposDeTrabalho[funcionario]>=25);
		
		if (regra1 == true || regra2 == true || regra3 == true) {
			console.log("Parabéns, já pode sair de férias eternas :)");
		} else {
			console.log("Infelizmente para você, ainda falta um tempo :(");
		}
	}
}
*/

// Resolução 5
/*
function verificarAposentadoria(nome) {

    colaborador = false
    idade = 0
    tempoTrabalho = 0

    // buscando um colaborador pelo nome
    for (posicao = 0; posicao < colaboradores.length; posicao++) {

        if (nome == colaboradores[posicao]) {
            colaborador = true
            idade = idades[posicao]
            tempoTrabalho = temposDeTrabalho[posicao]
        }
    }

    // se encontrar o colaborador, verifica as regras de aposentadoria
    if (colaborador) {
        
        porIdade = (idade >= 65)
        porTempoDeTrabalho = (tempoTrabalho >= 30)
        porIdadeComTempoDeTrabalho = (idade >= 60 && tempoTrabalho >= 25)

        // não importa qual regra seja atendida
        // se qualquer uma for, o colaborador pode se aposentar
        if (porIdade || porTempoDeTrabalho || porIdadeComTempoDeTrabalho) {
            console.log("Parabéns, já pode sair de férias eternas :)")
        } else {
            console.log("Infelizmente, ainda falta um tempo :(")
        }
    
    } else {
        console.log("Colaborador inválido :|")
    }
}
*/