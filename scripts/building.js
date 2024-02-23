class Building {
    constructor(cost, scoreRate, buttonName, buttonID) {
        this.cost = cost;
        this.scoreRate = scoreRate;
        this.costRate = 1.15;
        this.currentScoreRate = 0;
        this.buttonName = buttonName;
        this.buttonID = buttonID;
        this.amountOwned = 0;
    }

    // Triggered when the player buys a Building
    purchase() {
        if (score >= this.cost) {
            score -= this.cost;
            this.cost = Math.floor(this.cost * this.costRate);
            this.amountOwned++;
            this.currentScoreRate = this.scoreRate * this.amountOwned;
        }
    }

    // Updates the button, grey if can't afford, price, number owned, etc
    buttonState() {
        document.getElementById('score').innerHTML = Math.floor(score);
        document.getElementById(this.buttonID).innerHTML =
            'Buy ' +
            this.buttonName +
            ' (' +
            this.cost +
            ')' +
            '<br><hr>Owned: ' +
            this.amountOwned +
            '<br>Score Rate: ' +
            this.scoreRate * 100 +
            '%';

        if (score < this.cost) {
            document.getElementById(this.buttonID).disabled = true;
        } else {
            document.getElementById(this.buttonID).disabled = false;
        }
    }
}
