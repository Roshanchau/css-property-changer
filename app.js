const floatDiv = document.querySelector(".static");
const containerYRange = document.querySelector(".slidecontainerY input");
const containerXRange = document.querySelector(".slidecontainerX input");
const containerSRange = document.querySelector(".slidecontainerS input");
const dropForm = document.querySelector("form select");
// console.log(dropForm);
const choose = document.querySelector("form input");
// console.log(choose);
const redC = document.querySelector(".red");
const greenC = document.querySelector(".green");
const blueC = document.querySelector(".blue");
const aquaC = document.querySelector(".aqua");
const colorInput = document.querySelectorAll(".color input");

// vertical position.
containerYRange.addEventListener("click", function () {
  floatDiv.style.position = "absolute";
  floatDiv.style.top = containerYRange.value + "px";
});

//horizontal position.
containerXRange.addEventListener("click", function () {
  floatDiv.style.position = "absolute";
  floatDiv.style.left = containerXRange.value + "px";
});

//size
containerSRange.addEventListener("click", function () {
  floatDiv.style.height = containerSRange.value + "px";
  floatDiv.style.width = containerSRange.value + "px";
});
// console.log(dropForm.options[dropForm.selectedIndex].value);

choose.addEventListener("click", function () {
  //we can do this as well or,
  // if (dropForm.options[dropForm.selectedIndex].value == "Circle") {
  //   floatDiv.classList.add("shape");
  // } else {
  //   floatDiv.classList.remove("shape");
  // }

  if (dropForm.value == 1) {
    floatDiv.style.borderRadius = "0%";
  } else {
    floatDiv.style.borderRadius = "100%";
  }
});

for (let i = 0; i < colorInput.length; i++) {
  colorInput[i].addEventListener("change", function () {
    floatDiv.style.backgroundColor =
      "rgba(" +
      redC.value +
      "," +
      greenC.value +
      " , " +
      blueC.value +
      "," +
      aquaC.value +
      ")";
  });
}
