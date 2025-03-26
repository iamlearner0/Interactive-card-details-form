const form = document.getElementsByTagName("form");
const fill = document.querySelectorAll("input");
const cardNumber = document.getElementById("card-number");
const cardName = document.getElementById("owner-name");
const newName = document.querySelector(".card-name--input");
const newNumber = document.querySelector(".card-number--input");
const expiryDate = document.getElementById("expiry-date");
const monthDisplay = document.querySelector(".month--display");
const yearDisplay = document.querySelector(".year--display");
const expiryMonth = document.querySelector(".month");
const expiryYear = document.querySelector(".year");
const cvcNumber = document.getElementById("cvc-number");
const submitBtn = document.querySelector(".confirm");
const errorMessage = document.createElement("small");
errorMessage.className = "error";

// Event Listeners
newName.addEventListener("blur", checkName);
newNumber.addEventListener("blur", checkCardNumber);
expiryMonth.addEventListener("blur", checkMonth);
expiryYear.addEventListener("blur", checkYear);

newNumber.addEventListener("input", function () {
  if (this.value.length > 16) {
    this.value = this.value.slice(0, 16);
  }
});

expiryMonth.addEventListener("input", function () {
  if (this.value.length > 2) {
    this.value = this.value.slice(0, 2);
  }
  let value = parseInt(this.value, 10);

  if (value < 1) {
    this.value = 1; // Set minimum value to 1
  } else if (value > 12) {
    this.value = 12; // Set maximum value to 12
  }
});

expiryYear.addEventListener("input", function () {
  if (this.value.length > 2) {
    this.value = this.value.slice(0, 2);
  }
});

function checkName() {
  let newNameValue = newName.value;
  if (newNameValue != "") {
    cardName.innerText = newNameValue;
    console.log(typeof newNameValue);
  } else if (newNameValue === "") {
    newName.parentElement.appendChild(errorMessage);
    errorMessage.innerText = "Can't be blank";
    errorMessage.style.display = "block";
    newName.style.border = "1.5px solid red";
  } else if (typeof newNameValue !== "string") {
    errorMessage.innerText = "Wrong format!";
    errorMessage.style.display = "block";
    newName.style.border = "1.5px solid red";
  }
}

function checkCardNumber() {
  let newNumberValue = newNumber.value;
  let stringed = newNumberValue.toString();
  if (newNumberValue === "") {
    newNumber.parentElement.appendChild(errorMessage);
    errorMessage.innerText = "Can't be blank";
    errorMessage.style.display = "block";
    newNumber.style.border = "1.5px solid red";
  } else {
    let formattedValue = newNumberValue.match(/\d{1,4}/g)?.join(" ") || "";
    cardNumber.innerText = formattedValue;
  }
}

function checkMonth() {
  let expiryMonthValue = expiryMonth.value;
  if (expiryMonthValue === "") {
    expiryMonth.parentElement.appendChild(errorMessage);
    errorMessage.innerText = "Can't be blank";
    errorMessage.style.display = "block";
    newName.style.border = "1.5px solid red";
  } else {
    monthDisplay.innerText = expiryMonthValue;
  }
}

function checkYear() {
  let expiryYearValue = expiryYear.value;
  if (expiryYearValue === "") {
    expiryYear.parentElement.appendChild(errorMessage);
    errorMessage.innerText = "Can't be blank";
    errorMessage.style.display = "block";
    newName.style.border = "1.5px solid red";
  } else {
    yearDisplay.innerText = expiryYearValue;
  }
}

submitBtn.addEventListener("click", checkCardNumber);
