class Card {
    constructor (props) {
        this.rank = props.rank,
        this.suit = props.suit
    } 
    renderCard () {
        const current = document.querySelector(".current");
        const div = document.createElement("div");
        const cardNum = document.createElement("li");
        const cardSuit = document.createElement("li");
        div.setAttribute("id", "current");
        cardNum.textContent = `${this.rank}`
        cardSuit.textContent = `${this.suit}`
        if (this.suit === "♡") {
            div.style.backgroundColor = "pink"
        } else if (this.suit === "♢") {
            div.style.backgroundColor = "#F5EEF8"
        } else if (this.suit === "♤") {
            div.style.backgroundColor = "#E8F6F3"
        } else {
            div.style.backgroundColor = "#EBF5FB"
        }
        div.appendChild(cardNum);
        div.appendChild(cardSuit);
        current.appendChild(div);
    }
    clearCurrentCard() {
        const current = document.querySelector("#current");
        current.remove();
    }
}