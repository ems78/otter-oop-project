//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion
/// <reference path="code_00-static.js"/>
/// <reference path="code_01-characters.js"/>
/// <reference path="code_02-settings.js"/>

/**
 * Promjena stanja likova - interakcije
 */
function update_main() {

  commonBehaviour();

  if (GAME.activeWorldMap.name === "cave_entrance") {
    caveEntranceBehaviour();
  }

  else if (GAME.activeWorldMap.name === "cave1") {
    cave1Behaviour();  
  }

  else if (GAME.activeWorldMap.name === "lab1") {
    lab1Behaviour();  
  }
  
  else if (GAME.activeWorldMap.name === "lab2") {
    lab2Behaviour();
  }

  GAME.update();
};

/**
 * Zajedničko ponašanje na svim mapama
 */
function commonBehaviour() {

  GameSettings.output(Postavke.ispis(), true);

  handleFpReplenishment();
  detectMushroomCollision();
  detectCrystalCollision();

  if (SENSING.right.active) {
    Postavke.owlet.moveRight();
  }

  if (SENSING.left.active) {
    Postavke.owlet.moveLeft();
  }

  if (SENSING.up.active) {
    Postavke.owlet.jump();
  }

  if(SENSING.keyW.active) {
    handlePointerInteraction(Postavke.pointer);
    HandleInfoInteraction();
  }

  if(SENSING.keyA.active) {
    handleHealing();
  }
}


function caveEntranceBehaviour() {

  if (SENSING.space.active) {
    handleAttackOnBox([Postavke.key]);
  }

  detectKeyCollision();
}


function cave1Behaviour() {

  handleEnemyAttack();

  if (SENSING.space.active) {  
    handleAttackOnEnemy();
  }

  if (SENSING.keyW.active) {
    handlePullSwitchInteraction();
  }
}


function lab1Behaviour() {

  handleEnemyAttack();

  if (SENSING.space.active) {  
    handleAttackOnEnemy();
    handleAttackOnVial();
  }

  if(SENSING.keyW.active) {
    handlePointerInteraction(Postavke.pointer2);
  }
}


function lab2Behaviour() {

  if (SENSING.space.active) {
    handleAttackOnVial();
  }
}


// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
// izdvojene handle i detect funkcije 

/**
 * Detektira koliziju sa gljivama
 */
function detectMushroomCollision() {
  for (m of Postavke.mushrooms) {
    if (!Postavke.owlet.touching(m)) continue;

    Postavke.owlet.collect(m);
  }
};


/**
 * Detektira koliziju sa kristalima
 */
function detectCrystalCollision() {
  for (c of Postavke.kyberCrystals) {
    if (!Postavke.owlet.touching(c)) continue;

    Postavke.owlet.collect(c);
  }
};


/**
 * Detektira koliziju sa ključem
 */
function detectKeyCollision() {
  if (Postavke.owlet.touching(Postavke.key)) {
    Postavke.key.collected(Postavke.keyIcon);
  }
};


/**
 * Upravlja napadom na kutije
 */
function handleAttackOnBox(hiddenItems) {
  for (b of Postavke.boxes) {
    if (!Postavke.owlet.touching(b)) continue;
    if(!Postavke.CooldownActive("KeySpace", 500)) return;

    let containsHiddenItems = Postavke.owlet.attack(b);
    console.log(b.durability);

    if (arguments.length === 1 && containsHiddenItems) {
      for (let i of hiddenItems) {
        i.visible = true;
      }
    }
  }
};


/**
 * Upravlja napadom na vial
 */
function handleAttackOnVial() {
  for (v of Postavke.vials) {
    if (!Postavke.owlet.touching(v)) continue;
    if (!Postavke.CooldownActive("KeySpace", 200)) return;

    Postavke.owlet.attack(v);
  }
};


/**
 * Upravlja napadom enemyja na owleta
 */
function handleEnemyAttack() {
  if (!Postavke.enemy.visible || !Postavke.enemy.touching(Postavke.owlet)) return;
  if (!Postavke.CooldownActive("EnemyAttack", 2500)) return;

  Postavke.enemy.attack(Postavke.owlet);
  GameSettings.output(Postavke.ispis(), true);
}


/**
 * Upravlja napadom owleta na enemyja
 */
function handleAttackOnEnemy() {
  if (!Postavke.owlet.touching(Postavke.enemy)) return;
  if (!Postavke.CooldownActive("KeySpace", 500)) return;

  Postavke.owlet.attack(Postavke.enemy);
  GameSettings.output(Postavke.ispis(), true);
}


/**
 * Upravlja otključavanjem pointera
 * @returns boolean
 */
function handleUnlockingDoor() {
  if (Postavke.keyIcon) return true;
  return false;
}


/**
 * Upravlja interakcijom sa pointerom
 */
function handlePointerInteraction(pointer) {
  if (!Postavke.owlet.touching(pointer)) return;
  if (!Postavke.CooldownActive("KeyW", 1000)) return;
  if (!pointer.unlock(Postavke.keyIcon)) return;
  if (handleGameOver()) return;

  let nextMapName = pointer.nextMap();
  console.log(`Učitana je sljedeća mapa: ${nextMapName}`); // debugging

  if (nextMapName !== "Ne postoji") {
    GAME.setActiveWorldMap(pointer.nextMap());
    setup();
  }
};


/**
 * Upravlja interakcijom sa info pointerom
 */
function HandleInfoInteraction() {
  for (p of Postavke.infoPointers) {
    if (!Postavke.owlet.touching(p)) continue;

    if (Postavke.CooldownActive("KeyW", 1000)) {
      p.read();
    }
  }
};


/**
 * Upravlja interakcijom sa pullswitchom
 */
function handlePullSwitchInteraction() {
  if (!Postavke.owlet.touching(Postavke.pullSwitch)) return;
  if (!Postavke.CooldownActive("KeyW", 1000)) return;
  
  Postavke.pullSwitch.pull(Postavke.pointer);
}


/**
 * Upravlja sa healing
 */
function handleHealing() {
  Postavke.owlet.heal();
};


/**
 * Upravlja stalnim pozivanjem FP replenish
 */
function handleFpReplenishment() {
  Postavke.owlet.replenishForcePoints();
};


/**
 * Upravlja završetkom igre
 * @returns boolean
 */
function handleGameOver() {
  if (GAME.activeWorldMap.name === "hills") {
    Postavke.gameOver();
    return true;
  } return false;
}