function randomBattleBackground(){
  let body = document.getElementsByTagName("BODY")[0]
  let randomBackground
  let random = Math.ceil(Math.random()*5)
  switch (random) {
    case 1:
      randomBackground = "url(./images/background-1.jpg)"
      break;
    case 2:
      randomBackground = "url(./images/background-2.jpg)"
      break;
    case 3:
      randomBackground = "url(./images/background-3.jpg)"
      break;
    case 4:
      randomBackground = "url(./images/background-4.jpg)"
        break;
    case 5:
      randomBackground = "url(./images/background-5.jpg)"
        break;
  }
  body.style.background = randomBackground
  let skillButtons = document.getElementsByClassName("skill-button")
  Array.from(skillButtons).forEach(item => {
    item.addEventListener("mouseover", function(){item.style.transform = "scale(1.1)"})
    item.addEventListener("mouseover", function(){item.style.cursor = "url('images/pointer-2.png'), auto"})
    item.addEventListener("mouseout", function(){item.style.transform = "scale(1)"})
  });
}

function coinToss(){
  let element = document.getElementById("coin")
  let flipResult = Math.random()
  let hidden = document.getElementById("hide-skills")
  let coinTossText = document.getElementById("coin-toss").childNodes[1]
  let ctWinner
  
  if (flipResult <= 0.5){
    element.classList.add("heads")
    hidden.style.display = "none"
    ctWinner = "Player"
    setTimeout(() => {
      coinTossText.innerHTML = "Player goes first!"
      setTimeout(() => {
        coinTossText.innerHTML = "Choose your attack!"
        element.style.display = "none"
      }, 3000);
    }, 3000);
  }

  else{
    element.classList.add("tails")
    // hidden.style.display = "none"
    ctWinner = "Computer"
    setTimeout(() => {
      coinTossText.innerHTML = "Computer goes first!"
      setTimeout(() => {
        computerAttack()
      }, 3000);
    }, 3000);
  }
}

function playerAttack(elem){
  if(elem.outerHTML.includes("one")){
    eval(plPoke).attack(0,eval(cpPoke))
  }
  else if(elem.outerHTML.includes("two")){
    eval(plPoke).attack(1,eval(cpPoke))
  }
  else if(elem.outerHTML.includes("three")){
    eval(plPoke).attack(2,eval(cpPoke))
  }
  else if(elem.outerHTML.includes("four")){
    eval(plPoke).attack(3,eval(cpPoke))
  }
  else if(elem.outerHTML.includes("five")){
    eval(plPoke).attack(4,eval(cpPoke))
  }
}


function computerAttack(){

}




