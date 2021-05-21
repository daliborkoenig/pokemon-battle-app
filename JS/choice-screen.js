let playerPoke
let computerPoke
function randomPoke(){
  let random = Math.ceil(Math.random()*4)
  switch (random) {
    case 1:
      computerPoke = "pikachu"
      break;
    case 2:
      computerPoke = "bulbasaur"
      break;
    case 3:
      computerPoke = "squirtle"
      break;
    case 4:
      computerPoke = "snorlax"
        break;
  }
}

function playerChoice(x){
  let choice = "You have chosen "
  let pokeImg = document.getElementById("player-choice-img")
  let battleImg = document.getElementById("player-battle-img")
  let choiceStats = document.getElementById("player-choice-stats")
  let playerChoice = document.getElementsByClassName("player-choice-text")[0]
  let playerStats = document.getElementById("player-battle-stats")
  let playerSkills = document.getElementById("player-battle-skills")
  let vs1 = document.getElementById("vs1")

  if(x.outerHTML.includes("pikachu")){
    playerPoke = "pikachu"
    choice += " Pikachu"
    pokeImg.src = './images/pikachu-px.png'
    pokeImg.style.display = "block"
    battleImg.src = './images/pikachu-back-px.png'
    choiceStats.innerHTML = pikachu.showStatus();
    playerChoice.innerHTML = choice
    playerStats.innerHTML = pikachu.battleStats()
    playerSkills.innerHTML = pikachu.skillList()
    vs1.textContent = "PIKACHU"
  }
  else if(x.outerHTML.includes("bulbasaur")){
    playerPoke = "bulbasaur"
    choice += " Bulbasaur"
    pokeImg.src = './images/bulbasaur-px.png'
    pokeImg.style.display = "block"
    battleImg.src = './images/bulbasaur-back-px.png'
    choiceStats.innerHTML = bulbasaur.showStatus();
    playerChoice.innerHTML = choice
    playerStats.innerHTML = bulbasaur.battleStats()
    playerSkills.innerHTML = bulbasaur.skillList()
    vs1.textContent = "BULBASAUR"
  }
  else if(x.outerHTML.includes("squirtle")){
    playerPoke = "squirtle"
    choice += " Squirtle"
    pokeImg.src = './images/squirtle-px.png'
    pokeImg.style.display = "block"
    battleImg.src = './images/squirtle-back-px.png'
    choiceStats.innerHTML = squirtle.showStatus();
    playerChoice.innerHTML = choice
    playerStats.innerHTML = squirtle.battleStats()
    playerSkills.innerHTML = squirtle.skillList()
    vs1.textContent = "SQUIRTLE"
  }
  else if(x.outerHTML.includes("snorlax")){
    playerPoke = "snorlax"
    choice += " Snorlax"
    pokeImg.src = './images/snorlax-px.png'
    pokeImg.style.display = "block"
    battleImg.src = './images/snorlax-back-px.png'
    choiceStats.innerHTML = snorlax.showStatus();
    playerChoice.innerHTML = choice
    playerStats.innerHTML = snorlax.battleStats()
    playerSkills.innerHTML = snorlax.skillList()
    vs1.textContent = "SNORLAX"
  }
  setTimeout(function(){computerChoice()}, 0)
}

function computerChoice(){
  let pokeImg = document.getElementById("computer-choice-img")
  let battleImg = document.getElementById("computer-battle-img")
  let choice = "A.I. has chosen "
  let compChoice = document.getElementsByClassName("computer-choice-text")[0]
  let status = document.getElementById("computer-choice-stats")
  let choiceBox = document.getElementsByClassName("choice-box")
  let computerStats = document.getElementById("computer-battle-stats")
  let computerSkills = document.getElementById("computer-battle-skills")
  let vs3 = document.getElementById("vs3")

  randomPoke()
  if(computerPoke == "pikachu" && computerPoke !== playerPoke){
    choice += " Pikachu"
    pokeImg.src = './images/pikachu-px.png'
    battleImg.src = './images/pikachu-px.png'
    status.innerHTML = pikachu.showStatus();
    compChoice.innerHTML = choice
    computerStats.innerHTML = pikachu.battleStats()
    computerSkills.innerHTML = pikachu.skillList()
    vs3.textContent = "PIKACHU"
  }
  else if(computerPoke == "bulbasaur" && computerPoke !== playerPoke){
    choice += " Bulbasaur"
    pokeImg.src = './images/bulbasaur-px.png'
    battleImg.src = './images/bulbasaur-px.png'
    status.innerHTML = bulbasaur.showStatus();
    compChoice.innerHTML = choice
    computerStats.innerHTML = bulbasaur.battleStats()
    computerSkills.innerHTML = bulbasaur.skillList()
    vs3.textContent = "BULBASAUR"
  }
  else if(computerPoke == "squirtle" && computerPoke !== playerPoke){
    choice += " Squirtle"
    pokeImg.src = './images/squirtle-px.png'
    battleImg.src = './images/squirtle-px.png'
    status.innerHTML = squirtle.showStatus();
    compChoice.innerHTML = choice
    computerStats.innerHTML = squirtle.battleStats()
    computerSkills.innerHTML = squirtle.skillList()
    vs3.textContent = "SQUIRTLE"
  }
  else if(computerPoke == "snorlax" && computerPoke !== playerPoke){
    choice += " Snorlax"
    pokeImg.src = './images/snorlax-px.png'
    battleImg.src = './images/snorlax-px.png'
    status.innerHTML = snorlax.showStatus();
    compChoice.innerHTML = choice
    computerStats.innerHTML = snorlax.battleStats()
    computerSkills.innerHTML = snorlax.skillList()
    vs3.textContent = "SNORLAX"
  }
  else{
    computerChoice()
  }
  pokeImg.style.display = "block"
  choiceBox[0].style.display = "flex"
  choiceBox[1].style.display = "flex"
  document.getElementById("battle").style.display = "block"
}

document.getElementById("battle").addEventListener("click", function() {
document.getElementsByClassName("player-choice")[0].style.display = "none"
document.getElementsByClassName("battle-screen")[0].style.display = "grid"
randomBattleBackground()});

document.getElementById("battle").addEventListener("mouseover", function() {
document.getElementById("battle").style.cursor = "url('images/pointer-2.png'), auto"});


