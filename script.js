const billInput = document.querySelector(".bill__input");
const customerInput = document.querySelector(".customer__input");
const tipPerPerson = document.getElementById("tip__amount");
const totalPerPerson = document.getElementById("total__amount");
const tips = document.querySelectorAll(".tip__percent");
const tipCustom = document.querySelector(".tip__custom");
const resetBtn = document.querySelector(".reset");
const error = document.querySelector(".error");

billInput.addEventListener("input", billInputFun);
customerInput.addEventListener("input", customerInputFun);
tips.forEach(function (e) {
  e.addEventListener("click", clickheck);
});

tipCustom.addEventListener("input", inputTipFun);
resetBtn.addEventListener("click", reset);

billInput.value = "0.0";
customerInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let customerValue = 1;
let tipvalue = 0.15;

function billInputFun() {
  billValue = parseFloat(billInput.value);
  calculateTip();
}
function customerInputFun() {
  customerValue = parseFloat(customerInput.value);
  calculateTip();

  if (customerValue < 1) {
    error.style.display = "flex";

    customerInput.style.border = " solid red";
  } else {
    error.style.display = "none";
    customerInput.style.border = "none";
    calculateTip();
  }
}
function inputTipFun() {
  tipvalue = parseFloat(tipCustom.value / 100);
  tips.forEach(function (e) {
    e.classList.remove("active__tip");
  });
  calculateTip();
}

function clickheck(event) {
  tips.forEach(function (e) {
    e.classList.remove("active__tip");
    if (event.target.innerHTML == e.innerHTML) {
      e.classList.add("active__tip");
      tipvalue = parseFloat(e.innerHTML) / 100;
    }
  });
}

function calculateTip() {
  if (customerValue >= 1) {
    let tipAmount = (billValue * tipvalue) / customerValue;
    let total = (billValue + tipAmount) / customerValue;
    tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = "$" + total.toFixed(2);
    console.log(tipPerPerson);
  }
}

function reset() {
  billInput.value = "0.0";
  customerInput.value = "1";
  billInputFun();
  customerInputFun();
  tipCustom.value = "";
}
