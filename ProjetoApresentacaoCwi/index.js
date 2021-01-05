    nome = "Felipe Lovison Tedesco"
    apelido = "Tedesco"
    idade = 42
    dataNascimento = "31/10/1978"
    nauralidade = "Porto Alegre"
    altura = 1.70
    trabalho = true
    cargo = "empreendedor"
    empresa = "tekdata"

    apresentacao = "Meu nome é " + nome + " e sou conhecido como " + apelido + 
    ", tenho " + idade + " anos. Nasci em " + dataNascimento + " na cidade de " + nauralidade + 
    ". Minha altura é " + altura + "m e atualmente estou " + (trabalho ? "em atividade" : "desempregado") + 
    " e realizo a atividade de " + cargo + " na empresa " + empresa + "."
    
    console.log(apresentacao)