function indiceMaior (array) {
 let menorValor = array[0];

 for (index in array){
        if (menorValor.length < array[index].length){
        menorValor = array[index];
        }
        
 }
 return menorValor;


}

 console.log (indiceMaior (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));