let score = [0,1];
var turn;

//team1 details
var team1 = {
    name: "Arsenal",
    shoot: [],
    score:0
}

//team2 details
var team2 = {
    name: "MC City",
    shoot: [],
    score:0
}

window.onload = () => {
    //decide who is gonna bat first
    selectTurn();
    //update the text on the button
    updateButtonText();
    //update the initial score
    updateScore();
    //update team names
    updateNames();
}

let selectTurn = () => {
    turn = Math.round(Math.random())+1;
}
let x = 0;
let updateButtonText = () => {
    var button = document.getElementById("shoot-button");
    var winner;
    if(x <= 10){
        button.textContent = `${turn == 1 ? team1.name: team2.name} Shoot`;
    var result = document.getElementById("result");
    result.style.visibility ="";
    //check if game is over or not
    if(team1.shoot.length == 5 && team2.shoot.length == 5){
        button.remove();
        
    //to check who wins?
    result.textContent = team1.score === team2.score ?`Match Draw`: `${team1.score>team2.score? team1.name: team2.name} Wins`;
    if(team1.score > team2.score)
    {
        winner = team1;
    }    
    else {
        winner = team2;
    }
    }
    else{
        turn = team1.shoot.length === 5? 2: team2.shoot.length === 5? 1: turn;
    }
}}

let updateScore = () => {
    document.getElementById("team-1-score").textContent = team1.score;
    document.getElementById("team-2-score").textContent = team2.score;
    updateShoot();
}

let updateNames = () => {
    document.getElementById("team-1-name").textContent = team1.name;
    document.getElementById("team-2-name").textContent = team2.name;
}

var shootButtonClick = () => {
   var shoot =score[Math.floor(Math.random()*score.length)];
   x++;
   if(x<=10){

   if(turn === 1){
       team1.shoot.push(shoot);
       team1.score = calculateScore(team1.shoot);
   }
   else{
       team2.shoot.push(shoot);
       team2.score = calculateScore(team2.shoot);
   }
}

   updateButtonText();
   updateScore();
}

var calculateScore = (shoot) => {
    return shoot.map(num => {
        return num;
    }).reduce((total,shoot) => total+shoot);
    
}

var updateShoot = () => {
    var teamOne = document.getElementById("team-1-round-shoot").children;
    var teamTwo = document.getElementById("team-2-round-shoot").children;
    team1.shoot.forEach((num,index) => {
        num == 0 ? teamOne[index].style.backgroundColor = "red" : teamOne[index].style.backgroundColor = "green";
    })
    team2.shoot.forEach((num,index) => {
        num == 0 ? teamTwo[index].style.backgroundColor = "red" : teamTwo[index].style.backgroundColor = "green";
    })
}