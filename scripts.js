const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')




document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
})
