// ############## FIRST SCREEN BUTTON #############

let startingButton = document.getElementById("starting-choice")

startingButton.addEventListener("mouseover", function(e){e.target.style.cursor = "url('images/pointer-2.png'), auto"});
startingButton.addEventListener("click", function(e) {
  document.getElementsByClassName("starting-screen")[0].style.display = "none"
  document.getElementsByClassName("player-choice")[0].style.display = "grid"
  body.style.background = "url(./images/starting-screen.jpeg)"
});

// ############## CHOICE SCREEN POKEMON BUTTONS #############

let pokemon = document.getElementsByClassName("pokemon")
Array.from(pokemon).forEach(item => {
  item.children[0].addEventListener("click", function(e){plPoke = e.target.className; playerChoice();})
  item.children[0].addEventListener("mouseover", function(e){e.target.style.transform = "scale(1.2)"})
  item.children[0].addEventListener("mouseover", function(e){e.target.style.cursor = "url('images/pointer-2.png'), auto"})
  item.addEventListener("mouseout", function(e){e.target.style.transform = "scale(1)"})
});

// ############## CHOICE SCREEN START BATTLE BUTTON #############

document.getElementById("battle").addEventListener("click", function() {
  document.getElementsByClassName("player-choice")[0].style.display = "none"
  document.getElementsByClassName("battle-screen")[0].style.display = "grid"
  randomBattleBackground()});

// ############## BATTLE SCREEN BUY BUTTONS #############

let buyIcons = document.getElementById("buy-icons")
Array.from(buyIcons.children).forEach(item => {
  item.addEventListener("click", function(){
    if (item.className == "buy-icon-1"){
      eval(plPoke).buyHP()
    }
    else if(item.className == "buy-icon-2"){
      eval(plPoke).buyMP()
    }
  })
  item.addEventListener("mouseover", function(){item.style.transform = "scale(1.2)"})
  item.addEventListener("mouseover", function(e){item.style.cursor = "url('images/pointer-2.png'), auto"})
  item.addEventListener("mouseout", function(e){item.style.transform = "scale(1)"})
});

// ############## BATTLE SCREEN GOAGAIN BUTTON #############

let goAgainButton = document.getElementById("go-again")

goAgainButton.addEventListener("mouseover", function(e){e.target.style.cursor = "url('images/pointer-2.png'), auto"});
goAgainButton.addEventListener("click", function(e) {
  location.reload();
});

