function addNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let sum = n1 + n2;

  document.getElementById("result").textContent = "Sum: " + sum;
}

function subtractNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let difference = n1 - n2;

  document.getElementById("result").textContent = "Difference: " + difference;
}

function multiplyNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let product = n1 * n2;

  document.getElementById("result").textContent = "Product: " + product;
}

function divideNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let quotient = n1 / n2;

  document.getElementById("result").textContent = "Quotient: " + quotient;
}

document.getElementById("addBtn").addEventListener("click", addNumbers);
document.getElementById("subtractBtn").addEventListener("click", subtractNumbers);
document.getElementById("multiplyBtn").addEventListener("click", multiplyNumbers);
document.getElementById("divideBtn").addEventListener("click", divideNumbers);