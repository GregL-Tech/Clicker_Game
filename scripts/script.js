const tickRate = 1000 / 30; // 30 frames per second(fps)
let score = 0;

// Buildings are made from classes here.
let cursor = new Building(10, 0.01, 'Cursor', 'buySingleCursor');
let sugar = new Building(30, 0.03, 'Sugar', 'buySingleSugar');
let mixer = new Building(60, 0.06, 'Mixer', 'buySingleMixer');
let salt = new Building(120, 0.15, 'Salt', 'buySingleSalt');
let buttons = [cursor, sugar, mixer, salt];

// Manual click function, add one point to score per click
function scorePlusPlus() {
    score++;
}

function autoScore() {
    for (let i = 0; i < buttons.length; i++) {
        score += buttons[i].currentScoreRate;
    }
}

function buttonState() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].buttonState();
    }
}

// Everything in the following function updates every tick as set at the top
function updatePage() {
    autoScore();
    buttonState();
}
setInterval(updatePage, tickRate);
