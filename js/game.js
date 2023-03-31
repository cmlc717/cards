class Game {
    constructor () {
        this.allHands = [],
        this.deck = {},
        this.winner = false,
        this.player = {}
        this.numOpponents = 2;
        this.currentCard = {};
    }
    initializeGame() {
        this.deck = new Deck();
        this.deck.generateCards();
        this.deck.shuffleCards();
        let playerArr = this.deck.deal(1, 7);
        this.player = playerArr[0];
        this.allHands = this.deck.deal(this.numOpponents, 7)
        this.currentCard = this.deck.draw();
    }
    render(){
        this.player.renderHand();
        this.currentCard.renderCard();
    }
    opponentTurns(){
        for (let i = 0; i < this.allHands.length; i++) {
            let check = this.allHands[i].playCardOpp(this.currentCard);
            if (check) {
                this.currentCard = check;
                this.currentCard.clearCurrentCard();
                this.currentCard.renderCard();
            } else {
                this.allHands[i].addCard(this.deck.draw());
            }
        }
    }
    playerTurn(){
        let thisCard = [];
        for (let i = 0; i < this.player.arr.length; i++) {
            thisCard.push(document.getElementById(`${i}`));
        }
        for (let i = 0; i < thisCard.length; i++) {
            thisCard[i].addEventListener("click", () => {
                this.playerHelper(i);
            });
        }   
    }
    playerHelper(i){
        this.currentCard = this.player.arr[Number(i)];  
        this.player.playCardPlayer(Number(i));
        this.player.clearHand();
        this.player.renderHand();
        this.currentCard.clearCurrentCard();
        this.currentCard.renderCard();
        this.checkWin();
    }
    drawBtnMaker(){
        this.player.addCard(this.deck.draw());
            this.player.renderNewCard();
    }
    checkWin() {
        const main = document.querySelector("main");
        const h3 = document.createElement("h3");
        //check if everyone's cards are zero
        for (let i = 0; i < this.allHands.length; i++) {
            if (this.allHands[i].arr.length === 0) {
                h3.textContent = "Your opponent won! You lose!";   
                main.append(h3);
                break;         
            } 
        }
        if (this.player.arr.length === 0) {
            h3.textContent = "You win!";
            main.append(h3);
        }
        if (this.deck.arr.length === 0) {
            h3.textContent = "There are no cards left in the deck! There are no winners!";
            main.append(h3);
        }
    } 
    gameRun(){
        this.opponentTurns();
        this.playerTurn();
        this.checkWin();
    }
    clearUI(){
        const getInfo = document.querySelector("#input");
        getInfo.value = "";
    }
}