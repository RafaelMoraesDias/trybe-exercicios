function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  
  
  function createDaysOfTheMonth (){
  
   let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


   let classePai = document.querySelector ("#days");

    for (let index = 0; index < dezDaysList.length; index +=1){
      let dias = dezDaysList[index];
      let = diasCriados = document.createElement("li");

      if( dias === 24 || dias === 31){
        diasCriados.className = "day holiday";
        diasCriados.innerHTML = dias;
        classePai.appendChild(diasCriados);
      }
      else if (dias ===4 || dias === 11 || dias === 18 ){
        diasCriados.className = "day friday";
        diasCriados.innerHTML = dias;
        classePai.appendChild(diasCriados);
      }
      else if ( dias === 25){
        diasCriados.className = "day holiday friday";
        diasCriados.innerHTML = dias;
        classePai.appendChild (diasCriados)
      }
      else {
        diasCriados.className = "day";
        diasCriados.innerHTML = dias;
        classePai.appendChild (diasCriados);
      }
    }
  }

createDaysOfTheMonth();

function holidays (Feriados){

  let divPai = document.querySelector(".buttons-container");
  let NewButton = document.createElement("button");


  NewButton.innerHTML = Feriados;
  NewButton.id = "btn - holliday"
  divPai.appendChild (NewButton);
}

holidays ('Feriados');
