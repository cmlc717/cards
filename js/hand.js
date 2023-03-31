class Hand {
    constructor () {
        this.arr = []
    }
    addCard (card) {
        this.arr.push(card);
    }
    //edited to follow rules of uno
    playCardOpp (card){
        for (let i = 0; i < this.arr.length;i++) {;
            if (this.arr[i].rank === card.rank || this.arr[i].suit === card.suit) {
                let myCard = this.arr.splice(i, 1) //returns card in an array!
                return myCard[0]; //an object
            } 
        }
        return null;
    }
    playCardPlayer (i){
        this.arr.splice(i, 1);
    }
    renderHand () {
        const hand = document.querySelector(".hand");
        for (let i = 0; i < this.arr.length; i++) {
            const div = document.createElement("div");
            const cardNum = document.createElement("li");
            const cardSuit = document.createElement("li");
            const position = document.createElement("p");
            div.setAttribute("class", "cardBlock");
            div.setAttribute("id", `${i}`);
            cardNum.textContent = `${this.arr[i].rank}`
            cardSuit.textContent = `${this.arr[i].suit}`
            position.textContent = `Position: ${i}`;
            if (this.arr[i].suit === "♡") {
                div.style.backgroundColor = "pink"
            } else if (this.arr[i].suit === "♢") {
                div.style.backgroundColor = "#F5EEF8"
            } else if (this.arr[i].suit === "♤") {
                div.style.backgroundColor = "#E8F6F3"
            } else {
                div.style.backgroundColor = "#EBF5FB"
            }
            div.appendChild(cardNum);
            div.appendChild(cardSuit);
            div.appendChild(position);
            hand.appendChild(div);
        }
    }
    renderNewCard() {
        const hand = document.querySelector(".hand");
        const div = document.createElement("div");
        const cardNum = document.createElement("li");
        const cardSuit = document.createElement("li");
        const position = document.createElement("p");
        div.setAttribute("class", "cardBlock");
        div.setAttribute("id", `${this.arr.length - 1}`);
        cardNum.textContent = `${this.arr[this.arr.length - 1].rank}`
        cardSuit.textContent = `${this.arr[this.arr.length - 1].suit}`
        position.textContent = `Position: ${this.arr.length - 1}`;
        if (this.arr[this.arr.length - 1].suit === "♡") {
            div.style.backgroundColor = "pink"
        } else if (this.arr[this.arr.length - 1].suit === "♢") {
            div.style.backgroundColor = "#F5EEF8"
        } else if (this.arr[this.arr.length - 1].suit === "♤") {
            div.style.backgroundColor = "#E8F6F3"
        } else {
            div.style.backgroundColor = "#EBF5FB"
        }
        div.appendChild(cardNum);
        div.appendChild(cardSuit);
        div.appendChild(position);
        hand.appendChild(div);
    }
    clearHand(){
        const main = document.querySelector("main");
        const hand = document.querySelector(".hand");
        hand.remove();
        const newHand = document.createElement("ul");
        newHand.setAttribute("class", "hand");
        main.appendChild(newHand);
    }
}