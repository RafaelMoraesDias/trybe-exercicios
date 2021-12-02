function indiceMaior (array) {
 let menorValor = 0;

 for (index in array){
        if (menorValor > array[index]){
        menorValor = index;
        }
        
 }
 return menorValor;


}

 console.log (indiceMaior ([2, 4, 6, 7, 10, 0, -3]));