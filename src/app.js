const basicMonthly = document.getElementById("basic-monthly");
const professionalMonthly = document.getElementById("professional-monthly");
const masterMonthly = document.getElementById("master-monthly");
const basicAnnually = document.getElementById("basic-annually");
const professionalAnnually = document.getElementById("professional-annually");
const masterAnnually = document.getElementById("master-annually");
const switchInput = document.getElementById("switch-input");

let pricesMonthly = [];
let pricesAnnually = [];
pricesMonthly.push(basicMonthly, professionalMonthly, masterMonthly);
pricesAnnually.push(basicAnnually, professionalAnnually, masterAnnually);

pricesMonthly.map(item => item.classList.add("none"));

switchInput.addEventListener("click", checked);

function refresh() {
  switchInput.checked = false;
}

function checked() {
  if (switchInput.checked) {
    pricesMonthly.map(item => item.classList.remove("none"));
    pricesAnnually.map(item => item.classList.add("none"));
  } else {
    pricesMonthly.map(item => item.classList.add("none"));
    pricesAnnually.map(item => item.classList.remove("none"));
  }
}