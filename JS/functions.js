// ############## FUNCTION THAT CHOOSES THE COMPUTER POKEMON #############

function randomPoke(){
  let random = Math.ceil(Math.random()*4)
  switch (random) {
    case 1:
      cpPoke = "pikachu"
      break;
    case 2:
      cpPoke = "bulbasaur"
      break;
    case 3:
      cpPoke = "squirtle"
      break;
    case 4:
      cpPoke = "snorlax"
        break;
  }
  if(cpPoke == plPoke){
    randomPoke()
  }
}

// ############## FUNCTION THAT CHOOSES THE FILLS HTML WITH PLAYER CHOICES #############

function playerChoice(){
  playerChoice += ` ${plPoke.charAt(0).toUpperCase()}${plPoke.substr(1)}`
  plPokeImg.src = `./images/${plPoke}-px.png`
  plPokeImg.style.display = "block"
  plBattleImg.src = `./images/${plPoke}-back-px.png`
  plChoiceStats.innerHTML = eval(plPoke).showStatus();
  plChoiceText.innerHTML = plChoice
  plStats.innerHTML = eval(plPoke).plBattleStats()
  plSkills.innerHTML = eval(plPoke).plSkillList()
  plVs.textContent = `${plPoke.toUpperCase()}`
  plHpProgress.max = eval(plPoke).maxHealth
  plHpProgress.value = eval(plPoke).health
  plMagicProgress.max = eval(plPoke).maxMagic
  plMagicProgress.value = eval(plPoke).magic
  sideA.style.backgroundImage = `url(./images/${plPoke}-px.png)`;

  randomPoke()

  cpChoice += ` ${cpPoke.charAt(0).toUpperCase()}${cpPoke.substr(1)}`
  cpPokeImg.src = `./images/${cpPoke}-px.png`
  cpBattleImg.src = `./images/${cpPoke}-px.png`
  cpStatus.innerHTML = eval(cpPoke).showStatus();
  cpChoiceText.innerHTML = cpChoice
  cpStats.innerHTML = eval(cpPoke).cpBattleStats()
  cpSkills.innerHTML = eval(cpPoke).cpSkillList()
  cpVs.textContent = `${cpPoke.toUpperCase()}`
  cpHpProgress.max = eval(cpPoke).maxHealth
  cpHpProgress.value = eval(cpPoke).health
  cpMagicProgress.max = eval(cpPoke).maxMagic
  cpMagicProgress.value = eval(cpPoke).magic
  cpPokeImg.style.display = "block"
  choiceBox[0].style.display = "flex"
  choiceBox[1].style.display = "flex"
  document.getElementById("battle").style.display = "block"
  sideB.style.backgroundImage = `url(./images/${cpPoke}-px.png)`;
}

// ############## FUNCTION THAT PICKS A RANDOM BACKGROUND FOR BATTLE SCREEN #############


function randomBattleBackground(){
  let random = Math.ceil(Math.random()*5)
  let randomBackground = `url(./images/background-${random}.jpg)`

  body.style.background = randomBackground
  let skillButtons = document.getElementsByClassName("skill-button")
  Array.from(skillButtons).forEach(item => {
    item.addEventListener("mouseover", function(){item.style.transform = "scale(1.1)"})
    item.addEventListener("mouseover", function(){item.style.cursor = "url('images/pointer-2.png'), auto"})
    item.addEventListener("mouseout", function(){item.style.transform = "scale(1)"})
  });
}

// ############## COIN TOSS FUNCTION #############


function coinToss(){
  let flipResult = Math.random()
  let ctWinner
  
  if (flipResult <= 0.5){
  // if (flipResult <= 1){
    element.classList.add("heads")
    ctWinner = "Player"
    setTimeout(() => {
      coinTossText.innerHTML = "Player goes first!"
      setTimeout(() => {
        element.style.display = "none"
        hidden.style.display = "none"
        coinTossText.innerHTML = "Choose your attack!"
      }, 1000);
    }, 3000);
  }

  else{
    element.classList.add("tails")
    // hidden.style.display = "none"
    ctWinner = "Computer"
    setTimeout(() => {
      coinTossText.innerHTML = "Computer goes first!"
      setTimeout(() => {
        element.style.display = "none"
        computerAttack()
      }, 1000);
    }, 3000);
  }
}

// ############## FUNCTION FOR PLAYER ATTACKS #############

function playerAttack(elem){
  if(elem.outerHTML.includes("one")){
    eval(plPoke).plAttack(0,eval(cpPoke))
  }
  else if(elem.outerHTML.includes("two")){
    eval(plPoke).plAttack(1,eval(cpPoke))
  }
  else if(elem.outerHTML.includes("three")){
    eval(plPoke).plAttack(2,eval(cpPoke))
  }
  else if(elem.outerHTML.includes("four")){
    eval(plPoke).plAttack(3,eval(cpPoke))
  }
  else if(elem.outerHTML.includes("five")){
    eval(plPoke).plAttack(4,eval(cpPoke))
  }
}

// ############## FUNCTION FOR COMPUTER ATTACKS ############

function computerAttack(){
  let random = Math.floor(Math.random()*4)
  let minCost = JSON.parse(JSON.stringify(eval(cpPoke))).skills.sort(function (a,b) {
    return a.magicreq - b.magicreq
  })[1].magicreq
  if(eval(cpPoke).magic < minCost && eval(cpPoke).health >=10){
    eval(cpPoke).buyMP()
    computerAttack()
  }
  else if(eval(cpPoke).magic < eval(cpPoke).skills[random].magicreq && eval(cpPoke).health >= 10){
    computerAttack()
  }
  else if(eval(cpPoke).health < 10){
    eval(cpPoke).cpAttack(4,eval(plPoke))
  }
  else{
    eval(cpPoke).cpAttack(random,eval(plPoke))
  }
}






