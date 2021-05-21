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
    // console.log(`${this.name} status`);
    // console.log(`health: ${this.health}`);
    // console.log(`magic: ${this.magic}`);
    // console.log(`skills: ${skills}`);
    for (let skill of this.skills){
      skills.push(skill.name)
    }
    // console.log(skills);
    // alert(this.health)
    return `<p>stats:</p><br><p>health: ${this.health}</p><p>magic: ${this.magic}</p> <br><p>skills:</p><br><p> ${skills[0]}</p><p> ${skills[1]}</p><p> ${skills[2]}</p><p> ${skills[3]}</p>`
  }
  battleStats(){
    return `<p>Health: <progress id="player-health" value="${this.health}" max="${this.maxHealth}"></progress></p><p>Magic: <span style="padding-left:16px"></span><progress id="player-magic" value="${this.magic}" max="${this.maxMagic}"></progress></p>`
  }
  skillList(){
    return `<button class="skill-button" onclick="playerAttack(this)">${this.skills[0].name}</button>
    <button class="skill-button" onclick="playerAttack(this)">${this.skills[1].name}</button>
    <button class="skill-button" onclick="playerAttack(this)">${this.skills[2].name}</button>
    <button class="skill-button" onclick="playerAttack(this)">${this.skills[3].name}</button>`
  }
  attack(index,opponent){
    if(this.health <= 0){
      console.log(`${this.name} can't attack because he is dead`);
    }
    else{
      if(this.magic < this.skills[index].magicreq){
        console.log(`not enough magic, cannot launch attack!`);
      }
      else{
        console.log(`${this.name} launched skill '${this.skills[index].name}' successfully!`)
        console.log(`${opponent.name} got ${this.skills[index].damage} damage`);
        opponent.health -= this.skills[index].damage
        this.magic -= this.skills[index].magicreq
        if(opponent.health <= 0){
          console.log(`${opponent.name} is killed!`);
        }
      }
    }
  }
  getMagic(num){
    this.magic += num
    console.log(`${this.name} got ${num} magic back`);
  }
}

class AttackSkill{
  constructor(name,damage,magicreq){
    this.name = name
    this.damage = damage
    this.magicreq = magicreq
    this.magicreq = magicreq
  }
}

let pokemonArray = []

let pikachu = new Pokemon("pikachu", 120, 80)
let bulbasaur = new Pokemon("bulbasaur", 95, 105)
let squirtle = new Pokemon("squirtle", 105, 95)
let snorlax = new Pokemon("snorlax", 150, 60)

let lightning = new AttackSkill("Lightning", 40, 30);
let ironTail = new AttackSkill("Iron Tail", 60, 50);
let uproar = new AttackSkill("Uproar", 50, 45);
let wildCharge = new AttackSkill("Wild Charge", 55, 50);
pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(ironTail);
pikachu.learnAttackSkill(uproar);
pikachu.learnAttackSkill(wildCharge);


let poisonSeed = new AttackSkill ("Poison Seed", 20, 20);
let seedBomb = new AttackSkill ("Seed Bomb", 40, 40);
let powerWhip = new AttackSkill ("Power Whip", 50, 60);
let razorLeaf = new AttackSkill ("Razor Leaf", 70, 90);
bulbasaur.learnAttackSkill(poisonSeed);
bulbasaur.learnAttackSkill(seedBomb);
bulbasaur.learnAttackSkill(powerWhip);
bulbasaur.learnAttackSkill(razorLeaf);

let tackle = new AttackSkill ("Tackle", 20, 20);
let bubble = new AttackSkill ("Bubble", 40, 40);
let aquaJet = new AttackSkill ("Aqua Jet", 50, 60);
let waterPulse = new AttackSkill ("Water Pulse", 70, 90);
squirtle.learnAttackSkill(tackle);
squirtle.learnAttackSkill(bubble);
squirtle.learnAttackSkill(aquaJet);
squirtle.learnAttackSkill(waterPulse);

let lick = new AttackSkill("Lick", 40, 30);
let earthquake = new AttackSkill("Earthquake", 60, 50);
let heavySlam = new AttackSkill("Heavy Slam", 50, 45);
let outrage = new AttackSkill("Outrage", 55, 50);
snorlax.learnAttackSkill(lick);
snorlax.learnAttackSkill(earthquake);
snorlax.learnAttackSkill(heavySlam);
snorlax.learnAttackSkill(outrage);