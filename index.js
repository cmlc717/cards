const game1 = new Game();
game1.initializeGame();
game1.render();
game1.gameRun();
const drawBtn = document.getElementById("drawBtn");
drawBtn.addEventListener("click", () => {
    game1.drawBtnMaker();
});
const btn = document.getElementById("nextRound");
btn.addEventListener("click", () => {
    game1.gameRun();
});


const getInfo = document.querySelector("#input");
const getInfoBtn = document.querySelector("#submitBtn");
getInfoBtn.addEventListener("click", () => {
    game1.playerHelper(getInfo.value);
    game1.clearUI();
});



    


