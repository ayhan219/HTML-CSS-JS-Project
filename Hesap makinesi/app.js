const calculatorEl = document.querySelector(".hesapMakinesi");
const resultEl = document.querySelector(".result");
const temizle = document.querySelector(".temizle");
const sil = document.querySelector(".sil");

let firstNumber = "";
let selectedOperator = "";
let afterNumber = "";
let isWaitingANewvalue = false;

runEventListeners();

function runEventListeners() {
  calculatorEl.addEventListener("click", write);
  temizle.addEventListener("click", ekraniTemizle);
  sil.addEventListener("click", taneSilici);
}
function ekraniTemizle() {
  firstNumber = "";
  selectedOperator = "";
  afterNumber = "";
  isWaitingANewvalue = false;
  clearResultPaner();
}
function taneSilici() {
  if (isWaitingANewvalue) {
    afterNumber = Calculator.deleteAChar(afterNumber);
  } else {
    firstNumber = Calculator.deleteAChar(firstNumber);
  }
  resultEl.innerHTML = Calculator.deleteAChar(resultEl.innerHTML);
}

function write(e) {
  const element = e.target;
  if (element.classList.contains("sayiButton")) {
    if (isWaitingANewvalue) {
      afterNumber += element.value;
    } else {
      firstNumber += element.value;
    }

    updateResult(element.value);
  } else if (element.classList.contains("operator")) {
    if (!Calculator.isHaveOperator(resultEl.textContent)) {
      selectedOperator = element.value;
      isWaitingANewvalue = true;
      updateResult(element.value);
    }
  } else if (element.classList.contains("esittirButton")) {
    let result = calculate(
      firstNumber,
      selectedOperator,
      afterNumber
    ).toString();
    firstNumber = result;
    isWaitingANewvalue = false;
    clearOperatorAndAfterNumber();
    clearResultPaner();
    updateResult(result);
  }
}

function calculate(firstNumber, operator, secondNumber) {
  let result;
  let dotResult =
    Calculator.isDotHave(firstNumber) || Calculator.isDotHave(secondNumber);

  switch (operator) {
    case "+":
      result = dotResult
        ? parseFloat(firstNumber) + parseFloat(secondNumber)
        : parseInt(firstNumber) + parseInt(secondNumber);

      break;

    case "-":
      result = dotResult
        ? parseFloat(firstNumber) - parseFloat(secondNumber)
        : parseInt(firstNumber) - parseInt(secondNumber);

      break;

    case "*":
      result = dotResult
        ? parseFloat(firstNumber) * parseFloat(secondNumber)
        : parseInt(firstNumber) * parseInt(secondNumber);

      break;

    case "/":
      result = dotResult
        ? parseFloat(firstNumber) / parseFloat(secondNumber)
        : parseInt(firstNumber) / parseInt(secondNumber);

      break;
  }
  return result;
}
function updateResult(value) {
  if (value.length >= 6) {
    value = parseFloat(value).toFixed(2);
  }
  resultEl.innerHTML += value;
}

function clearResultPaner() {
  resultEl.innerHTML = "";
}
function clearOperatorAndAfterNumber() {
  selectedOperator = "";
  afterNumber = "";
}
