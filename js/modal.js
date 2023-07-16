//Модальное окно

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");

function displayModal(img)
{
    modal.style.display = "block";
    modalImage.src = img.src;
}

function hideModal()
{  
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
