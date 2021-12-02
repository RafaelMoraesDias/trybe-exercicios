function indiceMaior (array) {
 let maiorValor = 0;

 for (index in array){
        if (maiorValor < array[index]){
        maiorValor = index;
        }
        
 }
 return maiorValor;


}

 console.log (indiceMaior ([2, 3, 6, 7, 10, 1]));