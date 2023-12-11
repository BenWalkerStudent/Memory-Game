const cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false

let lockBoard = false;

let firstCard, secondCard;




const flipCard = function () {

    if (lockBoard) return

    if (this === firstCard) return

    this.classList.add('flip')

    if (!hasFlippedCard) {

        hasFlippedCard = true

        firstCard = this

        return

    }

    hasFlippedCard = false

    secondCard = this

    checkForMatch()


    resetCard

}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

const disableCards = function () {

    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

}

const unflipCards = function () {

    lockBoard = true

    setTimeout(() => {

        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')

        lockBoard = false

    }, 1500);


}

function resetCard() {

    [hasFlippedCard, lockBoard] = [false, false]

    [firstCard, secondCard] = [false, false]

}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();


cards.forEach(card => card.addEventListener('click', flipCard))


