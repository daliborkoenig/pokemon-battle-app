// let startingButton = document.getElementById("starting-choice")

// startingButton.addEventListener("click", function(e) {
//   document.getElementsByClassName("starting-screen")[0].style.display = "none"
//   document.getElementsByClassName("player-choice")[0].style.display = "grid"
// });

// let pokemon = document.getElementsByClassName("pokemon")
  
// Array.from(pokemon).forEach(item => {
//   item.children[0].addEventListener("mouseover", function(e){e.target.style.transform = "scale(1.2)"})
//   item.children[0].addEventListener("mouseover", function(e){e.target.style.cursor = "url('images/pointer-2.png'), auto"})
//   item.addEventListener("mouseout", function(e){e.target.style.transform = "scale(1)"})
// });


let startingButton = document.getElementById("starting-choice")

startingButton.addEventListener("mouseover", function(e){e.target.style.cursor = "url('images/pointer-2.png'), auto"});
startingButton.addEventListener("click", function(e) {
  document.getElementsByClassName("starting-screen")[0].style.display = "none"
  document.getElementsByClassName("player-choice")[0].style.display = "grid"
});

let pokemon = document.getElementsByClassName("pokemon")
  
Array.from(pokemon).forEach(item => {
  item.children[0].addEventListener("click", function(e){plPoke = e.target.className; playerChoice();})
  item.children[0].addEventListener("mouseover", function(e){e.target.style.transform = "scale(1.2)"})
  item.children[0].addEventListener("mouseover", function(e){e.target.style.cursor = "url('images/pointer-2.png'), auto"})
  item.addEventListener("mouseout", function(e){e.target.style.transform = "scale(1)"})
});

document.getElementById("battle").addEventListener("click", function() {
  document.getElementsByClassName("player-choice")[0].style.display = "none"
  document.getElementsByClassName("battle-screen")[0].style.display = "grid"
  randomBattleBackground()});

let buyIcons = document.getElementById("buy-icons")
Array.from(buyIcons.children).forEach(item => {
  item.addEventListener("click", function(){
    if (item.className == "buy-icon-1"){
      buyHealth()
    }
    else if(item.className == "buy-icon-2"){
      buyMagic()
    }
  })
  item.addEventListener("mouseover", function(){item.style.transform = "scale(1.2)"})
  item.addEventListener("mouseover", function(e){item.style.cursor = "url('images/pointer-2.png'), auto"})
  item.addEventListener("mouseout", function(e){item.style.transform = "scale(1)"})
});


