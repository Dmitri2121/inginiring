//Модальное окно

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");

function displayModal(img) {
  modal.style.display = "block";
  modalImage.src = img.src;
}

function hideModal() {
  modal.style.display = "none";
}

document.addEventListener("keydown", () => {
  hideModal();
});
