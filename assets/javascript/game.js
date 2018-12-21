
console.log("loading");

//page loads, 4 crystals shown, each with a random value
//user receives a random target score
//when the user clicks on a crystal, the value for that crystal is added to their score
//the goal is to meet but not exceed the target score
//once the player wins or loses, the dom is updated to reflect that and a new game starts

//crystal values will be a random number between 1 and 12
//target score will be a random number between 19 and 120


//Global Variables

var targetScore;
var userScore;
var wins;
var looses;

function ranNumber(min, max) {
    return Math.floor(Math.random() * max - min + max)
}

//start game function
function startGame () {
    //assign values to the crystals 
    $("#1").attr("data-value", ranNumber(1, 12));
    $("#2").attr("data-value", ranNumber(1, 12));
    $("#3").attr("data-value", ranNumber(1, 12));
    $("#4").attr("data-value", ranNumber(1, 12));
    
    //set the target score
    targetScore = ranNumber(19,120);
    //set user score to 0
    var userScore =0;
    //update the DOM
    $('#wins').text(wins);
    $('#wins').text(losses);    
    $('#wins').text(targetScore);
    $('#wins').text(userScore);
}

startGame();


//click function+
$("crystal").click(function(){
    //get the value of the crystal clicked
    var value = $(this).data("value");
    //add that value to user score
    userScore += value;
    $('#user-score').text(userScore);
    //compare user score and target score
    if (userScore === targetScore){
        //if equal, user wins
        //increment wins
        wins ++
        //start new game
        startGame();
    } else if( userScore > targetScore) {
        //if greater, user loses
        //increment loses
        losses ++;
        //start new game
        startGame();
    }
    })