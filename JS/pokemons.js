class Pokemon{
  constructor(name,health,magic){
    this.name = name
    this.maxHealth = health
    this.health = health
    this.maxMagic = magic
    this.magic = magic
    this.skills = []
    this.alive = true
    pokemonArray.push(this)
  }
  learnAttackSkill(skill){
    this.skills.push(skill)
  }
  showStatus(){
    let skills = []
    for (let skill of this.skills){
      skills.push(skill.name)
    }
    return `<p>stats:</p><br><p>health: ${this.health}</p><p>magic: ${this.magic}</p> <br><p>skills:</p><br><p> ${skills[0]}</p><p> ${skills[1]}</p><p> ${skills[2]}</p><p> ${skills[3]}</p>`
  }
  plBattleStats(){
    return `<p>Health: <progress id="player-health" value="${this.health}" max="${this.maxHealth}">${this.health}</progress></p><p>Magic: <span style="padding-left:16px"></span><progress id="player-magic" value="${this.magic}" max="${this.maxMagic}">${this.magic}</progress></p>`
  }  
  cpBattleStats(){
    return `<p>Health: <progress id="computer-health" value="${this.health}" max="${this.maxHealth}">${this.health}</progress></p><p>Magic: <span style="padding-left:16px"></span><progress id="computer-magic" value="${this.magic}" max="${this.maxMagic}">${this.magic}</progress></p>`
  }
  plSkillList(){
    return `<button class="skill-button one" onclick="playerAttack(this)" title="Power: ${this.skills[0].damage} / Magic cost: ${this.skills[0].magicreq}">${this.skills[0].name}</button>
    <button class="skill-button two" onclick="playerAttack(this)" title="Power: ${this.skills[1].damage} / Magic cost: ${this.skills[1].magicreq}">${this.skills[1].name}</button>
    <button class="skill-button three" onclick="playerAttack(this)" title="Power: ${this.skills[2].damage} / Magic cost: ${this.skills[2].magicreq}">${this.skills[2].name}</button>
    <button class="skill-button four" onclick="playerAttack(this)" title="Power: ${this.skills[3].damage} / Magic cost: ${this.skills[3].magicreq}">${this.skills[3].name}</button>
    <button class="skill-button five" onclick="playerAttack(this)" title="Power: ${this.skills[4].damage} / Magic cost: ${this.skills[4].magicreq}">${this.skills[4].name}</button>`
  }
  cpSkillList(){
    return `<button class="skill-button one">${this.skills[0].name}</button>
    <button class="skill-button two">${this.skills[1].name}</button>
    <button class="skill-button three">${this.skills[2].name}</button>
    <button class="skill-button four">${this.skills[3].name}</button>
    <button class="skill-button five">${this.skills[4].name}</button>`
  }
 
  plAttack(index,opponent){
    coinTossText.style.display = "none"
    battleText.style.display = "block"
    battleTextOne.textContent = ""
    battleTextTwo.textContent = ""
    battleTextThree.textContent = ""
    battleTextFour.textContent = ""
    if(this.health <= 0){
      battleText.innerHTML = `<p>${this.name.toUpperCase()} can't attack because he is dead</p>`;
    }
    else{
      if(this.magic < this.skills[index].magicreq){
        battleTextOne.textContent = `${this.name.toUpperCase()} doesn't have enough magic to cast ${this.skills[index].name}, choose another skill or buy magic.`;
      }
      else{
        battleTextOne.textContent = `${this.name.toUpperCase()} launched the skill '${this.skills[index].name}' successfully!`
        setTimeout(() => {
          battleTextTwo.textContent = `${opponent.name.toUpperCase()} received ${this.skills[index].damage} damage`;
        }, 500);
        setTimeout(() => {
          battleTextThree.textContent = `${this.name.toUpperCase()} looses ${this.skills[index].magicreq} magic`;
        }, 1000);
        setTimeout(() => {
          opponent.health -= this.skills[index].damage
          cpHpProgress.value -= opponent.health
          this.magic -= this.skills[index].magicreq
          plMagicProgress.value = this.magic
          cpHitAnimation.style.display = "block"
          hitAnimationText[0].textContent = `-${this.skills[index].damage}`
          cpHitAnimation.classList.add("opponent")
          cpStats.innerHTML = eval(cpPoke).cpBattleStats()
          plStats.innerHTML = eval(plPoke).plBattleStats()
          if(opponent.health <= 0){
            battleTextFour.textContent = `${opponent.name.toUpperCase()} is killed!`;
            cpBattleImg.classList.add("dead")
            goAgainButton.style.display = "block"
          }
          else{
            hidden.style.display = "grid"
            battleTextFour.textContent = `it is ${opponent.name.toUpperCase()}'s turn!'`;
            setTimeout(() => {
              cpHitAnimation.style.display = "none"
              cpHitAnimation.classList.remove("opponent")
              computerAttack()
            }, 1000);
          }
        }, 1500);
      }
    }
  }
  cpAttack(index,opponent){
    coinTossText.style.display = "none"
    battleText.style.display = "block"
    battleTextOne.textContent = ""
    battleTextTwo.textContent = ""
    battleTextThree.textContent = ""
    battleTextFour.textContent = ""
    if(this.health <= 0){
      battleText.innerHTML = `<p>${this.name.toUpperCase()} can't attack because he is dead</p>`;
    }
    else{
      if(this.magic < this.skills[index].magicreq){
        battleText.innerHTML = `<p>${this.name.toUpperCase()} doesn't have enough magic to cast ${this.skills[index].name}, choose another skill or buy magic.</p>`;
      }
      else{
        battleTextOne.textContent = `${this.name.toUpperCase()} launched the skill '${this.skills[index].name}' successfully!`
        setTimeout(() => {
          battleTextTwo.textContent = `${opponent.name.toUpperCase()} received ${this.skills[index].damage} damage`;
        }, 500);
        setTimeout(() => {
          battleTextThree.textContent = `${this.name.toUpperCase()} looses ${this.skills[index].magicreq} magic`;
        }, 1000);
        setTimeout(() => {
          console.log("POKE-magic progress before",cpMagicProgress.value);
          opponent.health -= this.skills[index].damage
          // plHpProgress.value -= this.skills[index].damage
          plHpProgress.value = opponent.health
          this.magic -= this.skills[index].magicreq
          // cpMagicProgress.value -= this.skills[index].magicreq
          cpMagicProgress.value = this.magic
          plHitAnimation.style.display = "block"
          hitAnimationText[1].textContent = `-${this.skills[index].damage}`
          plHitAnimation.classList.add("player")
          cpStats.innerHTML = eval(cpPoke).cpBattleStats()
          plStats.innerHTML = eval(plPoke).plBattleStats()
          console.log("POKE-magic progress after",cpMagicProgress.value);
          if(opponent.health <= 0){
            battleTextFour.textContent = `${opponent.name.toUpperCase()} is killed!`;
            plBattleImg.classList.add("dead")
            goAgainButton.style.display = "block"
          }
          else{
            battleTextFour.textContent = `it is ${opponent.name.toUpperCase()}'s turn!'`;
            hidden.style.display = "none"
          }
          setTimeout(() => {
            plHitAnimation.style.display = "none"
            plHitAnimation.classList.remove("player")
          }, 1000);
        }, 1500);
      }
    }
  }
  buyMP(){
    battleTextOne.textContent = ""
    battleTextTwo.textContent = ""
    battleTextThree.textContent = ""
    battleTextFour.textContent = ""
    if(this.health <= 10){
      battleTextOne.textContent = `${this.name.toUpperCase()} doesn't have enough health to buy magic`;
    }
    else if(this.magic > this.maxMagic-10){
      battleTextOne.textContent = `${this.name.toUpperCase()} can't have more than ${this.maxMagic} magic`;
    }
    else{
      this.health -= 10
      plHpProgress.value = this.health
      this.magic += 10
      plMagicProgress.value = this.magic
      plStats.innerHTML = eval(plPoke).plBattleStats()
      battleTextOne.textContent = `${this.name.toUpperCase()} got 10 magic back and lost 10 health`;
    }
  }
  buyHP(){
    battleTextOne.textContent = ""
    battleTextTwo.textContent = ""
    battleTextThree.textContent = ""
    battleTextFour.textContent = ""
    if(this.magic < 10){
      battleTextOne.textContent = `${this.name.toUpperCase()} doesn't have enough magic to buy health`;
    }
    else if(this.health > this.maxHealth-10){
      battleTextOne.textContent = `${this.name.toUpperCase()} can't have more than ${this.maxHealth} health`;
    }
    else{
      this.health += 10
      plHpProgress.value = this.health
      this.magic -= 10
      plMagicProgress.value = this.magic
      plStats.innerHTML = eval(plPoke).plBattleStats()
      battleTextOne.textContent = `${this.name.toUpperCase()} got 10 health back`;
    }
  }
}

class AttackSkill{
  constructor(name,damage,magicreq){
    this.name = name
    this.damage = damage
    this.magicreq = magicreq
  }
}

let pokemonArray = []

let pikachu = new Pokemon("pikachu", 120, 80)
let bulbasaur = new Pokemon("bulbasaur", 95, 105)
let squirtle = new Pokemon("squirtle", 105, 95)
let snorlax = new Pokemon("snorlax", 150, 60)

let basicAttack = new AttackSkill("Basic Attack", 5, 0);

let lightning = new AttackSkill("Lightning", 40, 30);
let ironTail = new AttackSkill("Iron Tail", 60, 50);
let uproar = new AttackSkill("Uproar", 50, 45);
let wildCharge = new AttackSkill("Wild Charge", 55, 50);
pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(ironTail);
pikachu.learnAttackSkill(uproar);
pikachu.learnAttackSkill(wildCharge);
pikachu.learnAttackSkill(basicAttack);


let poisonSeed = new AttackSkill ("Poison Seed", 20, 20);
let seedBomb = new AttackSkill ("Seed Bomb", 40, 40);
let powerWhip = new AttackSkill ("Power Whip", 50, 60);
let razorLeaf = new AttackSkill ("Razor Leaf", 70, 90);
bulbasaur.learnAttackSkill(poisonSeed);
bulbasaur.learnAttackSkill(seedBomb);
bulbasaur.learnAttackSkill(powerWhip);
bulbasaur.learnAttackSkill(razorLeaf);
bulbasaur.learnAttackSkill(basicAttack);

let tackle = new AttackSkill ("Tackle", 20, 20);
let bubble = new AttackSkill ("Bubble", 40, 40);
let aquaJet = new AttackSkill ("Aqua Jet", 50, 60);
let waterPulse = new AttackSkill ("Water Pulse", 70, 90);
squirtle.learnAttackSkill(tackle);
squirtle.learnAttackSkill(bubble);
squirtle.learnAttackSkill(aquaJet);
squirtle.learnAttackSkill(waterPulse);
squirtle.learnAttackSkill(basicAttack);

let lick = new AttackSkill("Lick", 40, 30);
let earthquake = new AttackSkill("Earthquake", 60, 50);
let heavySlam = new AttackSkill("Heavy Slam", 50, 45);
let outrage = new AttackSkill("Outrage", 55, 50);
snorlax.learnAttackSkill(lick);
snorlax.learnAttackSkill(earthquake);
snorlax.learnAttackSkill(heavySlam);
snorlax.learnAttackSkill(outrage);
snorlax.learnAttackSkill(basicAttack);