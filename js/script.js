"user strict";

const checkBtn = document.querySelector("#buttom-btc");
let secretNumber = document.querySelector("#secretNumber");
const inputNumber = document.querySelector("#input-number");
let goGemesText = document.querySelector("#go-gemes");
let attemptsText = document.querySelector("#attempt-text");
let resultText = document.querySelector(".bottom__result");
let resultScope = document.querySelector("#result-text");
const btnBeginning = document.querySelector("#btc-beginning");
let numberRepetitions = document.querySelector("#number-repetitions");
////////////////////////////////////////////////////////////////
let randomNumber = Number(Math.round(Math.random() * 19 + 1));
let numberAttempts = 20;
let attempts = 0;
let repetitions = 0;


function zeroingOut() {
  inputNumber.value = "";
  goGemesText.textContent = "Начни угадывать";
  goGemesText.style.color = "#fff";
  randomNumber = Number(Math.round(Math.random() * 19) + 1);
  secretNumber.textContent = randomNumber;
  numberAttempts = 20;
  attemptsText.textContent = numberAttempts;
  secretNumber.textContent = '???'
}

checkBtn.addEventListener("click", function () {
  let inputNumberValue = Number(inputNumber.value);

  if (!inputNumberValue) {
    goGemesText.textContent = "Введите число ⚠";
    goGemesText.style.color = "red";
  } else if (inputNumberValue === randomNumber) {
    goGemesText.textContent = "Ура победа. Вы выиграли ✪";
    goGemesText.style.color = "yellow";
    secretNumber.textContent = randomNumber;
    resultScope.textContent = numberAttempts;
  } else if (numberAttempts > 0) {
    if (inputNumberValue !== randomNumber) {
      goGemesText.textContent =
        inputNumberValue > randomNumber ? "Слишком много ↓" : "Слишком мало ↑";
      goGemesText.style.color =
        inputNumberValue > randomNumber ? "blue" : "green";
      numberAttempts--;
      attemptsText.textContent = numberAttempts;
      numberRepetitions.textContent = repetitions;
    }
    if (numberAttempts === 0) {
      zeroingOut();
      repetitions++;
      numberRepetitions.textContent = repetitions;
    }
  }
});

btnBeginning.addEventListener("click", function () {
  zeroingOut();
});

