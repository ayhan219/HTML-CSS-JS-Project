const hp = document.querySelector(".hp");
const ekran = document.querySelector(".ekranYazi");
const esittirbtn = document.querySelector("#esittirBtn");
const temizle = document.querySelector("#temizle");
const birTaneSil = document.querySelector("#sil");

let firstNumber = "";
let operator = "";
let lastNumber = "";
let siraBitti = false;
runEvents();

function runEvents() {
  hp.addEventListener("click", calistir);
  esittirbtn.addEventListener("click", esittir);
  temizle.addEventListener("click", ekraniSil);
  birTaneSil.addEventListener("click", silici);
}
function calistir(e) {
  if (e.target.className === "btn" && siraBitti === false) {
    const tiklananİlkSayi = e.target.value;
    firstNumber += tiklananİlkSayi;
    ekran.innerHTML += tiklananİlkSayi;
  }
  if (e.target.parentElement.className === "fonksiyons") {
    const tiklananOperator = e.target.value;
    operator = tiklananOperator;
    ekran.innerHTML += tiklananOperator;
    siraBitti = true;
  }
  if (siraBitti === true) {
    if (e.target.className === "btn") {
      const tiklananİkinciSayi = e.target.value;
      lastNumber += tiklananİkinciSayi;
      ekran.innerHTML += tiklananİkinciSayi;
    }
  }
}

function esittir() {
  // Convert firstNumber and lastNumber to numbers and perform the calculation
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(lastNumber);

  // Check the operator and perform the calculation
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operator";
  }

  // Display the result on the screen
  ekran.innerHTML = result;

  // Reset variables for the next calculation
  firstNumber = result.toString();
  operator = "";
  lastNumber = "";
  siraBitti = false;
}

function ekraniSil() {
  firstNumber = "";
  operator = "";
  lastNumber = "";
  siraBitti = false;
  ekran.innerHTML = "";
}

function silici(e) {
 
    
}
