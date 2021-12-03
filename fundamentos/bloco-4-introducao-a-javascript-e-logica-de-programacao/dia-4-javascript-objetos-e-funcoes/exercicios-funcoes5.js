function somaNumeros (numeros){

var soma =0;

for (index = 0; index <= numeros; index +=1){
    soma=soma + index;
}


return soma;


}

console.log(somaNumeros(5));