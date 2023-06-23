var buttonColours=["red", "blue", "info", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;

$(document).keypress(function() {
  if (!started) {
    $("#p1").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence(){
    userClickedPattern=[];
    
    level=level+1;
    $("#p1").text("Level " + level);
    var randomNumber= Math.floor((Math.random()*4));

    var randomChosenColour=buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    var audio = new Audio(randomChosenColour+".mp3");
    audio.play();
}

$(".btn").click(handler);

function handler(){

    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);

    var audio = new Audio(userChosenColour+".mp3");
    audio.play();
    // console.log(userClickedPattern);

    checkAnswer(userClickedPattern.length-1);
}

function checkAnswer(currentLevel){
if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } 
    else {
      var audio = new Audio("wrong.mp3");
      audio.play();
      $("body").addClass("game-over");
      $("#p1").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}











