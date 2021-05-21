let startingButton = document.getElementById("starting-choice")

startingButton.addEventListener("click", function(e) {
  document.getElementsByClassName("starting-screen")[0].style.display = "none"
  document.getElementsByClassName("player-choice")[0].style.display = "grid"
});

let pokemon = document.getElementsByClassName("pokemon")
  
Array.from(pokemon).forEach(item => {
  item.children[0].addEventListener("mouseover", function(e){e.target.style.transform = "scale(1.2)"})
  item.children[0].addEventListener("mouseover", function(e){e.target.style.cursor = "url('images/pointer-2.png'), auto"})
  item.addEventListener("mouseout", function(e){e.target.style.transform = "scale(1)"})
});

