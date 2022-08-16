setInterval(setClock, 1000)

const handHour = document.querySelector(".hour-hand");
const handMinute = document.querySelector(".minute-hand");
const handSecond = document.querySelector(".second-hand");


function setClock(){
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

  setRotation(handSecond, secondRatio);
  setRotation(handMinute, minuteRatio);
  setRotation(handHour, hourRatio);
}


function setRotation(element, rotationRatio){
  element.style.setProperty("--rotation", rotationRatio * 360) 
}

setClock()