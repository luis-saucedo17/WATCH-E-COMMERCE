setInterval(setClock, 1000);

let secHand = document.getElementById("sec");
let minHand = document.getElementById("min");
let hoursHand = document.getElementById("hrs");

function setClock() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds() / 60;
  const minutes = (seconds + currentDate.getMinutes()) / 60;
  const hours = (minutes + currentDate.getHours()) / 12;

  setRotation(secHand, seconds);
  setRotation(minHand, minutes);
  setRotation(hoursHand, hours);
}

function setRotation(element, rotation) {
  element.style.setProperty("--rotation", rotation * 360);
}

setClock();

let startBtn = document.getElementById("start-btn");
startBtn.addEventListener("change", goToLogin)

function goToLogin() {
  if(this.checked) {
    window.location.href('http://127.0.0.1:5501/html/login.html');
  } else {
    return;
  }
}