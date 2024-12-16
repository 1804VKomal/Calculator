// function Clear() {
//           var inp = document.getElementById('output');
//           inp.value = ''}

// function Solve(){
//           document.getElementById('output').value='7';
//           }

// const inputValue = document.getElementById("output");
const display = document.querySelector(".display");
const rows = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100").replace("^", "**"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "x") {
    output = output.slice(0,-1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

rows.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
