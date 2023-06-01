
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
        if (!oldTime) return false; // ako nije ispravno

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
        let m = `Mushrooms: ${this.owlet.mushroomCount}\t\t`;
        let k = `Crystals: ${this.owlet.crystalCount}\t\t`;
        let v = `Vials destroyed: ${this.owlet.vialsDestroyed}/x`;
        return hp + fp + m + k + v;
    }


    // cilj igre, skupit gljive, kristale
    // static goal = [5, 7];
}