let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };



//1- Imprima no console uma mensagem de boas-vindas para a personagem acima,
 //incluindo seu nome. Valor esperado no console:

 //console.log ("Bem Vinda" + " " + info.personagem);

 //2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, 
 //em seguida, imprima o objeto no console. Valor esperado no console:

   info.recorrente = "sim";
 //console.log (info);

//3- Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for (index in info){
    console.log(index);
}

 //4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. 
    for (index in info){   
    console.log(info[index]); 
    }

//