//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion


/**
 * Klasa: Character
 */
class Character extends Sprite {
  #healthPoints;
  #damagePerHit;
  /**
   * 
   * @param {number} x 
   * @param {number} y 
   * @param {layer} layer 
   */
  constructor(x, y, layer) {

    super(x + 2, y + 2, 32 - 4, 32 - 4); 

    this.frame_sets = {
      "up": [1],
      "walk-up": [1],
      "right": [1],
      "walk-right": [1],
      "down": [1],
      "walk-down": [1],
      "left": [1],
      "walk-left": [1]
    };

    this.layer = layer;
    this.visible = true;
    // this.okvir = true;

    this.#healthPoints = 100;
    this.#damagePerHit = 20;
  }

  touching(sprite) {
    if (!sprite.visible) return false;

    let a = {
      left: this.x,
      right: this.x + this.width,
      top: this.y,
      bottom: this.y + this.height
    };

    let b = {
      left: sprite.x,
      right: sprite.x + sprite.width,
      top: sprite.y,
      bottom: sprite.y + sprite.height
    };

    let result = a.left <= b.right &&
      b.left <= a.right &&
      a.top <= b.bottom &&
      b.top <= a.bottom;

    return result;
  }

  get healthPoints() {
    return this.#healthPoints;
  }

  set healthPoints(value) {

    this.#healthPoints = value;

    if (this.healthPoints <= 0) {
      console.log(" - death - \n");  // debugging
      this.visible = false;
    }
  }

  get damagePerHit() {
    return this.#damagePerHit;
  }

  // samo status efekti mogu mijenjati dph (RuneStone)
  set damagePerHit(statusEffect) {
    // TODO
  }

  jump(h = 28) {  

    if (!this.jumping) {

      this.jumping = true;
      this.velocity_y -= h;

    }
  }
}


/**
 * Class: Enemy
 */
class Enemy extends Character {
  #distance;
  /**
   * 
   * @param {number} x 
   * @param {number} y 
   * @param {layer} layer 
   * @param {number} hp 
   */
  constructor(x, y, layer, hp) {
    super(x, y, layer);

    this.frame_sets = {
      "up": [1],
      "walk-up": [1],
      "right": [1],
      "walk-right": [4, 5, 6], 
      "down": [1],
      "walk-down": [1],
      "left": [1],
      "walk-left": [1, 2, 3]
    };

    this.healthPoints = hp;
    this.damagePerHit = 10;
    this.#distance = 120;
    this.movingLeft = false;
  }

  get distance() {
    return this.#distance;
  }

  set distance(value) {
    if (value <= 0) {
      this.movingLeft = !this.movingLeft;
      this.#distance = 120;
      return;
    }
    this.#distance = value;
  }

  /**
   * Napada glavnog lika
   * @param {Jedi} target 
   * @returns 
   */
  attack(target) {
    target.healthPoints -= this.damagePerHit;
    console.log(`     Enemy attack  ->  HP: ${target.healthPoints} *\n`);
  }


  updatePosition() {

    this.distance -=1;

    if (this.movingLeft) {
      this.direction = 270;
      this.velocity_x = -1;
    }

    else {
      this.direction = 90;
      this.velocity_x = 1;
    }

    this.x_old = this.x;
    this.y_old = this.y;
    this.velocity_y += 1;
    this.x += this.velocity_x;
    this.y += this.velocity_y;
  }
}


/**
 * Klasa: Jedi
 * - playable character
 */
class Jedi extends Character {
  #forcePoints;
  #crystalCount;
  #mushroomCount
  #vialsDestroyed;
  /**
   * 
   * @param {number} x 
   * @param {number} y 
   * @param {layer} layer 
   */
  constructor(x, y, layer) {
    super(x, y, layer);

    this.frame_sets = {
      "up": [1],
      "walk-up": [1],
      "right": [1],
      "walk-right": [21, 22, 23, 24, 25, 26],
      "down": [1],
      "walk-down": [1],
      "left": [8],
      "walk-left": [32, 31, 30, 29, 28, 27]
    };

    this.#forcePoints = 100;
    this.#crystalCount = 0; 
    this.#mushroomCount = 0;  
    this.#vialsDestroyed = 0;
  }

  get healthPoints() {
    return super.healthPoints;
  }

  set healthPoints(value) {
    if (value >= 100) {
      super.healthPoints = 100;
      return;
    }

    super.healthPoints = value;

    if (this.healthPoints <= 0) {
      GameSettings.output("YOU DIED\n", true);
      btnStop_click();
    }
  }

  get forcePoints() {
    return this.#forcePoints;
  }

  set forcePoints(value) {
    if (value <= 0) {
      this.#forcePoints = 0;
      return;
    }

    if (value >= 100) {
      this.#forcePoints = 100;
      return;
    }

    this.#forcePoints = value;
  }

  get crystalCount() {
    return this.#crystalCount;
  }

  set crystalCount(v) { // ?
    this.#crystalCount++; 
  }                       

  get mushroomCount() {
    return this.#mushroomCount;
  }

  set mushroomCount(v) {
    this.#mushroomCount++;
  }

  get vialsDestroyed() {
    return this.#vialsDestroyed;
  }

  set vialsDestroyed(v) {
    this.#vialsDestroyed++;
  }


  /**
   * Služi za skupljanje resursa
   * @param {Item} item predmet igre
   */
  collect(item) {
    switch(item.collected()){
      case "KyberCrystal":
        this.crystalCount++;
        break;

      case "Mushroom":
        this.mushroomCount++;
        break;

      default:
        break;
    }
  }

    /**
   * Napad na lika ili predmet
   * @param {Sprite} target 
   * @returns 
   */
    attack(target) {
    
      if (target.constructor.name === "Enemy") {
        target.healthPoints -= this.damagePerHit;
        console.log(`* You attack  ->  Enemy Hp: ${target.healthPoints}\n`);
        return false;
      }

      if (target.constructor.name === "Vial") {
        this.vialsDestroyed = 1; // a nez jel bas dobar nacin al aj
      }

      if (target.takeDamage(this.damagePerHit)) {
        return true;
      } return false;
    }


  heal() {
    if (this.forcePoints < 3) return;

    this.healthPoints += 2;
    this.forcePoints -= 1;
  }


  replenishForcePoints() {
    if (Postavke.CooldownActive("forcePointReplenish", 1200)) {
      this.forcePoints += 1;
    }
  }
}


/**
 * Klasa: Collectable
 * - predstavlja predmet koji se može skupiti
 */
class Collectable extends Item {
  constructor(layer) {
    super(layer);
    this.visible = true;
  }

  updatePosition() { }  // fiksne pozicije

  /**
   * Sakriva objekt
   * @returns {string} ime klase
   */
  collected() {
    this.visible = false;
    return this.constructor.name;
  }
}


/**
 * Klasa: NonCollectable
 * - predstavlja predmet koji se ne može skupiti
 */
class NonCollectable extends Item {
  constructor(layer) {
    super(layer);
  }

  updatePosition() {};
}


/**
 * Class: KyberCrystal
 */
class KyberCrystal extends Collectable {
  constructor(layer) {
    super(layer);
  }
}


/**
 * Klasa: Mushroom
 */
class Mushroom extends Collectable {
  constructor(layer) {
    super(layer);
  }
}


/**
 * Klasa: Key
 * - predstavlja ključ kojim se otvaraju djelovi mape
 */
class Key extends Collectable {
  #inInventory;
  constructor(layer) {
    super(layer);

    this.visible = false;
    this.#inInventory = false;
  }

  get inInventory() {
    return this.#inInventory;
  }

  set inInventory(v) {
    this.#inInventory = !this.inInventory;
  }

  collected(keyIcon) {
    this.visible = false;
    keyIcon.visible = true;
    keyIcon.inInventory = true;
    console.log("You collected a key!");
    return this.constructor.name;
  }
}


/**
 * Klasa: Destructable
 * - predstavlja predmet koji se može uništiti
 */
class Destructable extends NonCollectable {
  #durability;
  /**
   * 
   * @param {layer} layer 
   * @param {number} dur - durability
   */
  constructor(layer, dur) {
    super(layer);
    this.#durability = dur;
    this.visible = true;
  }

  get durability() {
    return this.#durability;
  }  

  set durability(value) {

    if (value <= 0) {
      this.visible = false;
      this.#durability = 0;
      return;
    }

    this.#durability = value;
  }

  takeDamage(dmg) { 
    this.durability -= dmg;
    if (this.durability <= 0) {
      return true;
      
    } return false;
  }
}


/**
 * Klasa: NonDestructable
 * - predstavlja predmet koji se ne može uništiti
 */
class NonDestructable extends NonCollectable {
  constructor(layer) {
    super(layer);

    // this.visible = true;
  }
}


/**
 * Klasa: Vial
 * - uništivi objekt
 * - nema koliziju
 */
class Vial extends Destructable {
  constructor(layer) {
    super(layer, 5);
  }
}


/**
 * Klasa: Box
 * - uništivi objekt
 */
class Box extends Destructable {
  constructor(layer, dur) {
    super(layer, dur); // dur ce bit random generirani broj pri inicijalizaciji
  }

}


/**
 * Klasa: RuneStone
 * - predstavlja objekt koji inflikta status efekte
 */
class RuneStone extends NonDestructable {
  #statusEffect;
  #used;
  constructor(layer, statEff) {
    super(layer);

    this.#statusEffect = statEff;
    this.#used = false; 
    this.visible = true;
  }

  get statusEffect() {
    return this.#statusEffect;
  }

  set statusEffect(effect) {
    // postavit samo ako je dozvoljeno stanje (enum u statickoj?)
  }

  get used() {
    return this.#used;
  }

  set used(v) {    
    this.#used = true; 
  }                   
  
}


/**
 * Klasa: Pointer
 * - služi za prijelaz na novu mapu
 */
class Pointer extends NonDestructable {
  constructor(layer) {
    super(layer);

    this.locked = false;
    this.visible = true;
  }

  /**
   * Metoda za prelazak na sljedeću mapu
   * @returns {string} ime sljedeće mape
   */
  nextMap() {
    const map = this.locked ? `${GAME.activeWorldMap.name}locked` : GAME.activeWorldMap.name;
    return Postavke.linkedMaps[map] || "Ne postoji";
  }

  unlock(key) {
    if (this.locked) {
      if (key && key.visible) return true;
      console.log("You need a key to open this door!");
      return false;
    } return true;
  }

}


/**
 * Klasa infoPointer
 * - ispisuje upute za igranje
 */
class infoPointer extends NonDestructable {
  #infoText;
  constructor(infoTxt, layer) {
    super(layer);

    this.#infoText = infoTxt;
    this.visible = true;
  }

  get infoText() {
    return this.#infoText;
  }

  read() {
    console.log(`Info:\n${this.infoText}`)
  }

}


/**
 * Klasa: PullSwitch
 * - otkriva skrivene iteme
 */
class PullSwitch extends NonDestructable {
  #pulled;

  constructor(layer) {
    super(layer);

    this.visible = true;
    this.#pulled = false;
  }

  get pulled() {
    return this.#pulled;
  }

  set pulled(v) {
    this.#pulled = true;
  }

  /**
   * 
   * @param {Item} target - item kojeg otkriva
   * @returns 
   */
  pull(target) {

    if (this.pulled) 
      return;

    if (!this.pulled) {
      target.visible = true;
    }
  }

}

