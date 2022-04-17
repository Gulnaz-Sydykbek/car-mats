const modalWindow = document.querySelector(".modal-js");
const buttonModal = document.querySelector(".main-display__button-js");

buttonModal.addEventListener("click", () => {
  window.addEventListener("keydown", onEscKeyDown);
  modalWindow.classList.add("active");
});

modalWindow.addEventListener("click", (e) => {
  if (e.currentTarget === e.target) {
    window.removeEventListener("keydown", onEscKeyDown);
    modalWindow.classList.remove("active");
  }
});

function onEscKeyDown(e) {
  if (e.code === "Escape") {
    modalWindow.classList.remove("active");
  }
}
