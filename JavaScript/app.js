console.log("working");
let btnConverter = document.querySelectorAll(".btnConverter");
let inputVal = document.querySelector("#inputVal");
let results = document.querySelector("#results");
let btnInfo = document.querySelectorAll(".btnInfo");
let submitBtn = document.querySelector("#submitBtn");
let equalsign = document.querySelector("#equalsign");
let show = document.querySelectorAll(".show");
let ConvertInputVal;
let resultsVal;

for (let i = 0; i < btnConverter.length; i++) {
  btnConverter[i].addEventListener("click", function() {
    for (let j = 0; j < btnConverter.length; j++) {
      //   btnConverter[j].style.textDecoration = "none";
      btnInfo[j].style.display = "none";
    }

    results.style.backgroundColor = "transparent";
    results.style.borderStyle = "solid";
    results.style.color = "black";

    console.log(show);
    show[0].textContent = "=";
    show[1].textContent = "Results";

    show[0].style.display = "inline";
    show[1].style.display = "inline";
    inputVal.style.display = "inline";

    btnInfo[i].style.display = "flex";

    console.log(this.textContent);
    if (this.textContent === "℉ to ℃") {
      inputVal.setAttribute("placeholder", "Farenheit Value");
      submitBtn.style.display = "block";
    } else if (this.textContent === "Lbs to Kg") {
      submitBtn.style.display = "block";
      inputVal.setAttribute("placeholder", "Lbs Value");
    } else if (this.textContent === "Miles to Kilometer") {
      submitBtn.style.display = "block";
      inputVal.setAttribute("placeholder", "Miles Value");
    } else if (this.textContent === "Feet to Meters") {
      submitBtn.style.display = "block";
      inputVal.setAttribute("placeholder", "Feet Value");
    }
  });
}

submitBtn.addEventListener("click", calculate);
inputVal.addEventListener("keyup", enteredCheck);

function enteredCheck(event) {
  if (event.which === 13) {
    // console.log("enetered was clicked");
    submitBtn.click;
  }
}

function calculate() {
  console.log("calculating...");
}
