"use strict";
"user strict";

var scoreRondom = Math.round(Math.random() * 20);
var score = 20;
var attempt = 0;
document.querySelector("#buttom-btc").addEventListener("click", function () {
  var inputNumber = Number(document.querySelector("#input-number").value);

  if (!inputNumber) {
    var about = document.querySelector("#go-gemes");
    about.textContent = "Введите число";
    about.style.color = "red";
  } else if (inputNumber === scoreRondom) {
    var _about = document.querySelector("#go-gemes");

    _about.textContent = "Ураа правильно";
    _about.style.color = "#00ff22";
    document.querySelector("#secretNumber").textContent = scoreRondom;
    var backgroundBlok = document.querySelector(".general-wrapper");
    backgroundBlok.style.background = "url(/src/image/4A5.gif) no-repeat center";
    backgroundBlok.style.backgroundSize = "100% 100%";
    backgroundBlok.style.opacity = "0.6";

    if (attempt < score) {
      attempt = score;
      document.querySelector("#result-text").textContent = attempt;
    }
  } else if (inputNumber !== scoreRondom) {
    if (score > 1) {
      var _about2 = document.querySelector("#go-gemes");

      _about2.textContent = inputNumber > scoreRondom ? "Слишком много" : "Слишком мало";
      _about2.style.color = inputNumber > scoreRondom ? "red" : "blue";
      score--;
      document.querySelector("#attempt-text").textContent = score;
    } else {
      var _about3 = document.querySelector("#go-gemes");

      _about3.textContent = "Вы проиграли, попробуйте еще раз";
      _about3.style.color = "#fbff00";
      document.querySelector("#attempt-text").textContent = "0";

      var _backgroundBlok = document.querySelector(".general-wrapper");

      _backgroundBlok.style.background = "url(/src/image/dWy.gif) no-repeat center";
      _backgroundBlok.style.backgroundSize = "100% 100%";
      _backgroundBlok.style.opacity = "0.6";
    }
  }
});
document.querySelector("#btc-beginning").addEventListener("click", function () {
  inputNumber = Number(document.querySelector("#input-number").value = "");
  document.querySelector("#attempt-text").textContent = "20";
  score = 20;
  var backgroundBlok = document.querySelector(".general-wrapper");
  backgroundBlok.style.background = "#000000";
  document.querySelector("#secretNumber").textContent = "???";
  var about = document.querySelector("#go-gemes");
  about.textContent = "Начни угадывать";
  about.style.color = "#ffffff";
  scoreRondom = Math.round(Math.random() * 20) + 1;
  document.querySelector("#top-text").textContent = "Отгадай от 1 до 20";
});
document.querySelector(".level").addEventListener("click", function () {
  inputNumber = Number(document.querySelector("#input-number").value = "");
  document.querySelector("#top-text").textContent = "Отгадай от 1 до 40";
  document.querySelector("#attempt-text").textContent = "10";
  score = 10;
  var backgroundBlok = document.querySelector(".general-wrapper");
  backgroundBlok.style.background = "#000000";
  document.querySelector("#secretNumber").textContent = "???";
  var about = document.querySelector("#go-gemes");
  about.textContent = "Начни угадывать";
  about.style.color = "#ffffff";
  scoreRondom = Math.round(Math.random() * 40);
});