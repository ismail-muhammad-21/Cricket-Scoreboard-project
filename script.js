let homeScore = 0;
let awayScore = 0;

const scoreBoard = document.querySelector(".socrecard");
console.log(scoreBoard)
const homeDisplay = document.getElementById("home-display");
const awayDisplay = document.getElementById("away-display");

// new game btn

const newGame = document.getElementById("new-game");

// score button


scoreBoard.addEventListener("click",function(e){
    const selectedItem = e.target;
    const homePts = selectedItem.dataset.homePts;
    const awayPts = selectedItem.dataset.awayPts;
    if(homePts){
        homeScore += +homePts;
        homeDisplay.textContent = homeScore;
    }
    if(awayPts){
        awayScore += +awayPts;
        awayDisplay.textContent = awayScore;
    }

    highlight();
})



function highlight(){
    homeDisplay.classList.toggle("high-light",homeScore > awayScore);
    awayDisplay.classList.toggle("high-light",homeScore < awayScore);

}




newGame.addEventListener("click",() =>{
    homeScore = 0;
    awayScore = 0;
    homeDisplay.textContent = homeScore;
    awayDisplay.textContent = awayScore;
    highlight();
})