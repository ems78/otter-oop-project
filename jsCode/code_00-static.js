
class Postavke {
    
    constructor() {
        throw "Statička klasa";
    }

    /** @type {KyberCrystal} */
    static kyberCrystals = [];

    /** @type {Mushroom} */
    static mushrooms = [];

    /** @type {Vial} */
    static vials = [];

    /** @type {Box} */
    static boxes = [];

    /** @type {InfoPointer} */
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

    /**
     * Provjera zadovoljenih uvjeta i ispis poruka za GAME OVER
     * @returns 
     */
    static gameOver() {
        btnStop_click();
        console.log("_________ GAME OVER _________");

        if (this.owlet.vialsDestroyed === this.goals["vials"] 
        && this.owlet.crystalCount >= this.goals["crystals"] 
        && this.owlet.mushroomCount >= this.goals["mushrooms"]) {
            GameSettings.colorLog(this.gameOverSuccess.desc, "success");
            return;
        }

        GameSettings.colorLog(this.gameOverFail.desc, "error");
        if (this.owlet.vialsDestroyed != this.goals["vials"]) {
            GameSettings.colorLog(this.gameOverFail.details.vials, "warning");
        }
        if (this.owlet.crystalCount < this.goals["crystals"]) {
            GameSettings.colorLog(this.gameOverFail.details.crystals, "warning");
        }
        if (this.owlet.mushroomCount < this.goals["mushrooms"]) {
            GameSettings.colorLog(this.gameOverFail.details.mushrooms, "warning");
        }
    }

    /** @type {number} */
    static goals = {
        crystals: 5,
        mushrooms: 8,
        vials: 5
    }

    static gameOverSuccess = {
        desc: "Mission successful"
    }

    static gameOverFail = {
        desc: "Mission failed",
        details: {
            vials: " * You didn't destroy all the vials...",
            crystals: " * You didn't collect enough crystals...",
            mushrooms: " * You didn't collect enough mushrooms..."
        }
    }
}