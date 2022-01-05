function createState(){
    let state = document.getElementById("state");
    let stateoptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    
    for(let index = 0; index <stateoptions.length; index +=1){
        let estado = document.createElement("option");
        estado.innerText= stateoptions[index];
        estado.value = stateoptions[index];
        state.appendChild(estado);
    }
}
createState();