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
  });
}
