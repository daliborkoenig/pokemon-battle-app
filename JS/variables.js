let plPoke
let cpPoke


let plHpProgress = document.getElementById("player-health")
let plMagicProgress = document.getElementById("player-magic")
let cpHpProgress = document.getElementById("computer-health")
let cpMagicProgress = document.getElementById("computer-magic")

let plChoice = "You have chosen "
let plPokeImg = document.getElementById("player-choice-img")
let plBattleImg = document.getElementById("player-battle-img")
let plChoiceStats = document.getElementById("player-choice-stats")
let plChoiceText = document.getElementsByClassName("player-choice-text")[0]
let plStats = document.getElementById("player-battle-stats")
let plSkills = document.getElementById("player-battle-skills")
let plVs = document.getElementById("vs1")

let cpPokeImg = document.getElementById("computer-choice-img")
let cpBattleImg = document.getElementById("computer-battle-img")
let cpChoice = "A.I. has chosen "
let cpChoiceText = document.getElementsByClassName("computer-choice-text")[0]
let cpStatus = document.getElementById("computer-choice-stats")
let choiceBox = document.getElementsByClassName("choice-box")
let cpStats = document.getElementById("computer-battle-stats")
let cpSkills = document.getElementById("computer-battle-skills")
let cpVs = document.getElementById("vs3")

let sideA = document.getElementsByClassName("side-a")[0]
let sideB = document.getElementsByClassName("side-b")[0]

// let hidden = document.getElementById("hide-skills")
// let coinTossText = document.getElementById("coin-toss").childNodes[1]
