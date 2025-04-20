let hpRound = 0;
let roundTime = 4;

input1 = document.getElementById("input1");
input2 = document.getElementById("input2");
input3 = document.getElementById("input3");
input4 = document.getElementById("hpRound");
inputTimer = document.getElementById("inputTimer");

progress1 = document.getElementById("progress1");
progress2 = document.getElementById("progress2");

function functionToExecute() {
  input1.value = Math.floor(Math.random() * 100) + 1;
  input2.value = Math.floor(Math.random() * 100) + 1;

  progress1.value = input1.value;
  progress2.value = input2.value;

  hpRound++;
  input3.value = "";

  if (parseInt(input1.value) > parseInt(input2.value) && hpRound === 3) {
    input3.value = "Player1 wins!";

    hpRound = 0;

    // input1.value = 100;
    // input2.value = 100;
    progress1.value = input1.value;
    progress2.value = input2.value;
  } else if (parseInt(input1.value) < parseInt(input2.value) && hpRound === 3) {
    input3.value = "Player2 wins!";
    hpRound = 0;

    // input1.value = 100;
    // input2.value = 100;
    progress1.value = input1.value;
    progress2.value = input2.value;
  } else if (
    parseInt(input1.value) === parseInt(input2.value) &&
    hpRound === 3
  ) {
    input3.value = "DRAW!";
    hpRound = 0;

    // input1.value = 100;
    // input2.value = 100;
    progress1.value = input1.value;
    progress2.value = input2.value;
  }
  input4.value = hpRound;
}

function functionToExecute3() {
  input1.value = 100;
  input2.value = 100;
  input3.value = "";
  progress1.value = input1.value;
  progress2.value = input2.value;
  hpRound = 0;
  input4.value = "";
  inputTimer.value = "";
}

function schet() {
  roundTime--;
  inputTimer.value = roundTime;
  
}

function functionTimer() {
  
  // setInterval("schet()", 1000);
  if (roundTime == 0) {
    clearInterval(schet());
  }
  
}
