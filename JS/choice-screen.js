

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

function playerChoice(x){

  // if(x.outerHTML.includes("pikachu")){
  //   plPoke = "pikachu"
  // }
  // else if(x.outerHTML.includes("bulbasaur")){
  //   plPoke = "bulbasaur"
  // }
  // else if(x.outerHTML.includes("squirtle")){
  //   plPoke = "squirtle"
  // }
  // else if(x.outerHTML.includes("snorlax")){
  //   plPoke = "snorlax"
  // }
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
  sideA.style.backgroundImage = `url(../images/${plPoke}-px.png)`;

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
  sideB.style.backgroundImage = `url(../images/${cpPoke}-px.png)`;
}



