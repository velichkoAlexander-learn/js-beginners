// Создайте div
let div = document.createElement("div");
// добавьте класс "wrapper"
div.classList.add("wrapper");
// поместите его в body
document.body.appendChild(div);
// создайте неупорядоченный список
// добавьте списку 3 элемента списка со словами: "один, два и три"
let list = `
<ul>
<li>один</li>
<li>два</li>
<li>три</li>
</ul>`;
// поместите этот список в предыдущий div
div = document.querySelector(".wrapper");
div.innerHTML = list;

// создайте картинку
let img = document.createElement("img");
// установите src для картинки
img.src = "https://via.placeholder.com/150";
// установите ширину картинки 250
img.width = 250;
// добавьте картинке класс "cute"
img.classList.add("cute");
// добавьте картинке alt со значением "Cute Puppy"
img.alt = "Cute Puppy";
// добавьте картинку в существующий div.wrapper
div.appendChild(img);

// используя HTML строку, создать div с двумя параграфами внутри.
let divWithP = `
<div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
</div>`;
// поместить этот div перед неупорядоченным списком
const ulElement = div.querySelector("ul");
ulElement.insertAdjacentHTML("beforebegin", divWithP);
// добавить второму параграфу класс "warning"
const myDiv = div.querySelector(".myDiv");
myDiv.children[1].classList.add("warning");
// удалите первый параграф
myDiv.children[0].remove();
// создайте функцию которая называется "generatePlayerCard" и принимает на вход 3 аргумента: name, age, and height

function generatePlayerCard(name, age, height) {
  const html = `
<div class="playerCard">
   <h2>${name} — ${age}</h2>
   <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!
   <button class="delete" type="button">&times; Delete</button>
   </p>
</div>
`;

  return html;
}
// эта функция должна возвращать вот такой HTML:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// создайте div с классом "cards"
const cards = document.createElement("div");
cards.classList.add("cards");
// Используя функцию создайте 4 карты
let cardsHTML = generatePlayerCard("alex", 12, 150);
cardsHTML += generatePlayerCard("alex2", 12, 150);
cardsHTML += generatePlayerCard("alex3", 12, 150);
cardsHTML += generatePlayerCard("alex4", 12, 150);
// добавьте эти карты в div с классом "cards"
// поместите этот div в DOM перед .wrapper
cards.innerHTML = cardsHTML;
div.insertAdjacentElement("beforebegin", cards);

// Bonus,Не обязательно.
// поместите в каждую карту  кнопку которая по клику будет удалять карту

// Выберете все кнопки
const buttons = document.querySelectorAll(".delete");
// Сделайте функцию для удаления карт
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  // buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest(".playerCard").remove();
}
// с помощью цикла поместите обработчик события на каждую кнопку
buttons.forEach(function(button) {
  button.addEventListener("click", deleteCard);
});
