function sayHello() {
  alert("Hello from the external file!");
}

function sayGoodbye() {
    alert("Goodbye from the external file!");
}

// Connect the function to the button
let btn1 = document.getElementById("helloBtn");
btn1.addEventListener("click", sayHello);

let btn2 = document.getElementById("goodbyeBtn");
btn2.addEventListener("click", sayGoodbye);

