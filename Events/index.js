const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");

const btnShot2 = event => console.log(event.currentTarget);

btn.addEventListener("click", btnShot2);

// btn2.addEventListener("mouseover", btnShot);
// btn2.removeEventListener("click", btnShot);

const buttons = document.querySelectorAll(".buy");

function btnShot(event) {
  console.log(event.target);
  console.log(event.target == event.currentTarget);
  event.stopPropagation();
}

buttons.forEach(function(button) {
  button.addEventListener("click", btnShot);
});

window.addEventListener("keyup", function(event) {
  if (event.key === "e") {
    console.log(event.key);
  }
});

const form = document.querySelector(".form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const email = form.email.value;
  const name = form.name.value;
  console.log(email, name);
});
