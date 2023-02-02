let player = {
    name: "Stanley",
    chip: 200
}
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum")
let cardsEl = document.querySelector("#cards")
let newCardEl = document.querySelector("#newcard")
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let playerEL = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chip
function getRandomCard(){
    let randomNumbers = Math.floor (Math.random() * 13) + 1;
    if (randomNumbers === 1){
        return 11
    }else if (randomNumbers > 10) {
        return 10 
    }else {
        return randomNumbers
    }
}
function startGame(){
    isAlive = true
    let firstCard = getRandomCard
    let secondCard = getRandomCard
    cards = [firstCard, secondCard]
    let sum = firstCard + secondCard;
    renderGame();
}
function renderGame(){
    cardsEl.textContent = "Card: " 
    for (let i = 0; i < cardsEl.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        isAlive = true
    } else if (sum === 21) {
        message = "You'v got BLACKJACK"
        hasBlackJack = true;
    }else {
        message = "You're out of the game"
        isAlive = false;
    }
    messageEl.textContent = message 
}
function newCard() {
    if (hasBlackJack === true && isAlive === true) {
        let newcard = getRandomCard()
        cards.push(newcard)
        sum += newcard
        renderGame()
    } 
}
