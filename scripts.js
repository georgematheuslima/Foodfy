const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        modalOverlay.classList.add("active")
        const imgId = card.getAttribute('id');
        const cardName = card.querySelector('.card__content').querySelector('p').textContent;
        const madeBy = card.querySelector('.card__info').querySelector('p').textContent;
        modalOverlay.querySelector('img').src = `/assets/${imgId}.png`;
        modalOverlay.querySelector('#nome_receita').textContent = cardName;
        modalOverlay.querySelector('#chef_receita').textContent = madeBy
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector('img').src= "";
})

