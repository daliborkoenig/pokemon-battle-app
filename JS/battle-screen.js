function randomBattleBackground(){
  let body = document.getElementsByTagName("BODY")[0]
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




