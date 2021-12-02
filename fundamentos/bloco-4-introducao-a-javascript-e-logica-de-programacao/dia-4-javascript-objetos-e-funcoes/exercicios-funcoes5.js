function indiceMaisRepete (array) {
 let loop = 0;
let repete = 0
 

for (index in array){
        loop+= array[index];
        if (array[index] === loop){
        repete += array[index];
        }
        
 }
 return repete;


}

 console.log (indiceMaisRepete ([2, 3, 2, 5, 8, 2, 3]));