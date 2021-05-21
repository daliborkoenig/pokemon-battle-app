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
    item.addEventListener("mouseover", function(e){e.target.style.transform = "scale(1.1)"})
    item.addEventListener("mouseover", function(e){e.target.style.cursor = "url('images/pointer-2.png'), auto"})
    item.addEventListener("mouseout", function(e){e.target.style.transform = "scale(1)"})
  });

}

function playerAttack(elem){
  if(elem.parentNode.id.includes("computer")){
    playerAttack(elem)
  }
  else{
    if(playerPoke == "pikachu"){
      alert(pikachu.skills)
    }
  }
}





