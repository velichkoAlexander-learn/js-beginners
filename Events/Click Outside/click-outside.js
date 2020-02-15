const btns = document.querySelectorAll("button");
const outerModal = document.querySelector(".modal-outer");
const innerModal = document.querySelector(".modal-inner");

function openModal(event) {
  const btn = event.currentTarget;
  const card = btn.closest(".card");
  const img = card.querySelector("img");
  const src = img.src.replace(200, 400);
  const header = card.querySelector("h2").innerText;

  innerModal.innerHTML = `
  <img src="${src}" alt="${img.alt}">
  <h2> ${header} </h2>
  `;
  outerModal.classList.add("open");
}

btns.forEach(btn => {
  btn.addEventListener("click", openModal);
});

function closeModal() {
  outerModal.classList.remove("open");
}

outerModal.addEventListener("click", closeModal);

window.addEventListener("keydown", e => {
  if ((e.key = "Escape")) {
    closeModal();
  }
});
