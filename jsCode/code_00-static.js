
class Postavke {
    
    constructor() {
        throw "Klasička klasa";
    }

    /** @type {KyberCrystal} */
    static kyberCrystals = [];

    /** @type {Mushroom} */
    static mushrooms = [];

    /** @type {Vial} */
    static vials = [];

    /** @type {Box} */
    static boxes = [];

    /** @type {infoPointer} */
    static infoPointers = [];

    /** @type {Jedi} */
    static owlet;

    /** @type {Enemy} */
    static enemy;

    /** @type {Pointer} */
    static pointer;

    /** @type {Pointer} */
    static pointer2;

    /** @type {PullSwitch} */
    static pullSwitch;

    /** @type {Key} */
    static key;

    /** @type {Key} */
    static keyIcon;

    /** @type {string} */
    static linkedMaps = {
        forrest: "cave_entrance",
        cave_entrance: "cave1",
        cave1: "lab1",
        lab1: "hills",
        lab1locked: "lab2",
        lab2: "hills"
    };

    /** @type {Date} */
    static typeOfCooldown = {
        KeySpace: new Date(),
        EnemyAttack: new Date(),
        KeyW: new Date(),
        forcePointReplenish: new Date()
    };

    /**
    * Provjerava je li cooldown aktivan
    * @param {string} type - za što je cooldown
    * @param {number} time - broj milisekundi
    * @returns boolean
    s*/
    static CooldownActive(type, time) {

        const oldTime = this.typeOfCooldown[type];
        if (!oldTime) return false;

        const currentTime = new Date();
        if (currentTime - oldTime > time) {
            this.typeOfCooldown[type] = currentTime;
            return true;

        } return false;
    }


    /**
     * Info za ispis u output
     * @returns {string}
     */
    static ispis() {
        let hp = `HP: ${this.owlet.healthPoints}\t\t\t`;
        let fp = `FP: ${this.owlet.forcePoints}\n`;
        let m = `Mushrooms: ${this.owlet.mushroomCount}/8\t\t`;
        let k = `Crystals: ${this.owlet.crystalCount}/5\t\t`;
        let v = `Vials destroyed: ${this.owlet.vialsDestroyed}/5`;
        return hp + fp + m + k + v;
    }


    static gameOver() {
        btnStop_click();
        console.log("_________ GAME OVER _________");
        let mission = "Mission successful!";
        if (this.owlet.vialsDestroyed != this.goals["vials"]) {
            console.log("You didn't destroy all the vials...");
            mission = "Mission failed";
        }
        if (this.owlet.crystalCount < this.goals["crystals"]) {
            console.log("You didn't collect enough crystals...");
            mission = "Mission failed";
        }
        if (this.owlet.mushroomCount < this.goals["mushrooms"]) {
            console.log("You didn't collect enough mushrooms...");
            mission = "Mission failed";
        }
        console.log(mission);
    }


    static goals = {
        crystals: 5,
        mushrooms: 8,
        vials: 5
    };
}