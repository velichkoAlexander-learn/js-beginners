// let str = "Привет я тут!";
// let answer = str + " ПГТУ";
// let name12 = "Vasia";
// answer = `Привет ${name}`;
// console.log(answer);

// console.log("f" / 1);

// function log() {
//   let a = 1;
//   let b = 2;
//   console.log((a + b) / 10);
// }

// log();

// let el = document.querySelector("h1");
// let els = document.querySelectorAll("p");
// el.textContent = "Privet";
// el.textContent = "Privet";
// el.innerText = "prive123";
// el.insertAdjacentText("afterend", "TEXT1");
// console.log(el.innerText);

// let par = document.querySelector(".desc");
// par.classList.add("addedClass");
// // par.classList.remove("cool");
// let contain = par.classList.contains("cool");
// console.log(contain);

// let img = document.querySelector("img");

// img.addEventListener("click", function() {
//   img.classList.toggle("round");
// });
// img.alt = "cool pic";
// img.setAttribute("alt", "cool pic1");
// let alt = img.getAttribute("alt");
// console.log(alt);
// console.log(img.dataset.views);

// const el = document.createElement("p");
// const div = document.createElement("div");
// div.classList.add("wrapper");
// el.innerText = "Privet Mir";
// div.append(el);
// document.body.append(div);

let container = document.querySelector(".cool");
let testTemplate = `<div class="wrapper"> 
<p>Privet Mir${1 + 3}</p>
</div>`;
console.log(container);
// вставка строки которая преобразуется в html
container.innerHTML = testTemplate;

let elem = document.querySelector(".test");
// преобразование строки в элемент
let boooom = document.createRange().createContextualFragment(testTemplate);
// После преобразования можно взаимодействовать элементом например добавить в него картинку
document.body.append(boooom);

// let img = document.querySelector("img");
// img.remove();
