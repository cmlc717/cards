class Deck {
    constructor () {
        this.possibleRanks = ["ace", "king", "queen", "jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"],
        this.possibleSuits =  ["♡", "♢", "♤", "♧"],
        this.arr = []
    }
    generateCards () {
        for (let i = 0; i < this.possibleRanks.length; i++) {
            for (let j = 0; j < this.possibleSuits.length; j++) {
                this.arr.push(new Card({rank: this.possibleRanks[i], suit: this.possibleSuits[j]}));
            }
        }
    }
    shuffleCards () {
        for (let i = this.arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = this.arr[i];
            this.arr[i] = this.arr[j];
            this.arr[j] = temp;
        }
    }
    draw () {
        let drawnCard = this.arr.pop() //in an array
        return drawnCard;
    }
    deal(numHands, cardsPerHand) {
        let allHands = [];
        for (let i = 0; i < numHands; i++) {
            allHands[i] = new Hand()
            for (let j = 0; j < cardsPerHand; j++) {
                let deltCard = this.draw();
                allHands[i].addCard(deltCard);
            }
        }
        return allHands; //in an array
    }
}