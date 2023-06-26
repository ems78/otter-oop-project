//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion
//#region kod
/// <reference path="code_00-static.js"/>
/// <reference path="code_01-characters.js"/>
//#endregion


const btnSetupGame = document.getElementById("btnSetupGame");
btnSetupGame.addEventListener("click", setup);

function setup() {

  GAME.clearSprites();
  Postavke.kyberCrystals = [];
  Postavke.mushrooms = [];
  Postavke.vials = [];
  Postavke.boxes = [];
  Postavke.infoPointers = [];

  let odabrana = GAME.activeWorldMap.name; 
  GameSettings.output(odabrana);
  setupInCommon();

  switch (odabrana) {
    
    case "forrest":
      setupForrest();
      break;

    case "cave_entrance":
      setupCaveEntrance();
      break;

    case "cave1":
      setupCave1();
      break;

    case "lab1":
      setupLab1();
      break;

    case "lab2":
      setupLab2();
      break;

    case "hills":
      setupHills();
      break;

    default:
      throw "Ne postoji setup za " + GAME.activeWorldMap.name;
  }

  setupOwlet(); // uvik na kraju radi poretka slojeva
  render_main();
}


/* LEVELS */

function setupInCommon() {

  GAME.activeWorldMap.setCollisions("platforms");

  const g1 = new Mushroom(GAME.getSpriteLayer("g1"));
  GAME.addSprite(g1);
  Postavke.mushrooms.push(g1);

  const p1 = new Pointer(GAME.getSpriteLayer("p1"));
  GAME.addSprite(p1);
  Postavke.pointer = p1;

}


function setupOwlet() {

  if (!Postavke.owlet) {
    const o = new Jedi(0, 7 * 32, GAME.getSpriteLayer("owlet"));
    Postavke.owlet = o;
  }
  Postavke.owlet.x = 0;
  Postavke.owlet.y = 7 * 32;
  GAME.addSprite(Postavke.owlet);
  
}


function setupForrest() {

  const c1 = new KyberCrystal(GAME.getSpriteLayer("c1"));
  GAME.addSprite(c1);
  Postavke.kyberCrystals.push(c1);

  const iP1 = new infoPointer("Press left/right arrows to move.\nPress up arrow to jump.", GAME.getSpriteLayer("info1"));
  GAME.addSprite(iP1);
  Postavke.infoPointers.push(iP1);

  const iP2 = new infoPointer("Collect mushrooms and kyber crystals!", GAME.getSpriteLayer("info2"));
  GAME.addSprite(iP2);
  Postavke.infoPointers.push(iP2);

  const iP3 = new infoPointer("Press W key to interact with pointers.\nSome will give instructions and some will load the next map.", GAME.getSpriteLayer("info3"));
  GAME.addSprite(iP3);
  Postavke.infoPointers.push(iP3);
  
}


function setupCaveEntrance() {

  const g2 = new Mushroom(GAME.getSpriteLayer("g2"));
  GAME.addSprite(g2);
  Postavke.mushrooms.push(g2);

  const key = new Key(GAME.getSpriteLayer("key"));
  GAME.addSprite(key);
  Postavke.key = key;

  const b1 = new Box(GAME.getSpriteLayer("b1"), 30);
  GAME.addSprite(b1);
  Postavke.boxes.push(b1);

  const keyIcon = new Key(GAME.getSpriteLayer("keyIcon"));
  GAME.addSprite(keyIcon);
  console.log(keyIcon);  
  Postavke.keyIcon = keyIcon;

}


function setupCave1() {

  Postavke.pointer.visible = false;

  const e = new Enemy(13 * 32, 7 * 32, GAME.getSpriteLayer("enemy"), 70);
  GAME.addSprite(e);
  Postavke.enemy = e;

  const c1 = new KyberCrystal(GAME.getSpriteLayer("c1"));
  GAME.addSprite(c1);
  Postavke.kyberCrystals.push(c1);

  const sw = new PullSwitch(GAME.getSpriteLayer("sw"));
  GAME.addSprite(sw);
  Postavke.pullSwitch = sw;

  if (Postavke.keyIcon && Postavke.keyIcon.inInventory) {
    const keyIcon = new Key(GAME.getSpriteLayer("keyIcon"));
    GAME.addSprite(keyIcon);
    Postavke.keyIcon = keyIcon;
    keyIcon.visible = true;
  }

}


function setupLab1() {

  const v1 = new Vial(GAME.getSpriteLayer("v1"));
  const v2 = new Vial(GAME.getSpriteLayer("v2"));
  const v3 = new Vial(GAME.getSpriteLayer("v3"));
  GAME.addSprite(v1);
  GAME.addSprite(v2);
  GAME.addSprite(v3);
  Postavke.vials.push(v1);
  Postavke.vials.push(v2);
  Postavke.vials.push(v3);

  const e = new Enemy(9 * 32, 3 * 32, GAME.getSpriteLayer("enemy"), 50);
  GAME.addSprite(e);
  Postavke.enemy = e;

  const b = new Box(GAME.getSpriteLayer("b1"), 30);
  GAME.addSprite(b);
  Postavke.boxes.push(b);

  if (Postavke.keyIcon && Postavke.keyIcon.visible) {
    const keyIcon = new Key(GAME.getSpriteLayer("keyIcon"));
    GAME.addSprite(keyIcon);
    Postavke.keyIcon = keyIcon;
    keyIcon.visible = true;
  }

  Postavke.pointer.locked = true;

  const p2 = new Pointer(GAME.getSpriteLayer("p2"));
  GAME.addSprite(p2);
  Postavke.pointer2 = p2;

}


function setupLab2() {

  const v1 = new Vial(GAME.getSpriteLayer("v1"));
  const v2 = new Vial(GAME.getSpriteLayer("v2"));
  GAME.addSprite(v1);
  GAME.addSprite(v2);
  Postavke.vials.push(v1);
  Postavke.vials.push(v2);

  const g1 = new Mushroom(GAME.getSpriteLayer("g1"));
  const g2 = new Mushroom(GAME.getSpriteLayer("g2"));
  const g3 = new Mushroom(GAME.getSpriteLayer("g3"));
  GAME.addSprite(g1);
  GAME.addSprite(g2);
  GAME.addSprite(g3);
  Postavke.mushrooms.push(g1);
  Postavke.mushrooms.push(g2);
  Postavke.mushrooms.push(g3);

}


function setupHills() {

  const c1 = new KyberCrystal(GAME.getSpriteLayer("c1"));
  GAME.addSprite(c1);
  Postavke.kyberCrystals.push(c1);

}