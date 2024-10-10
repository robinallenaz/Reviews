//Part 1: Humble Beginnings

const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  //part 1A
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
        name: "Frank",
        type: "Flea",
        inventory: ["small hat", "sunglasses"]
    }
  }
};

roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled ${result}`);
}
for (let i=0; i<adventurer.inventory.length; i++) {
    console.log(adventurer.inventory[i]);

}
console.log(adventurer.companion.companion.inventory[1]);

adventurer.roll();

//Part 2

class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];

    }
}
roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled ${result}`);
}
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);

//Part 3

class Adventurer extends Character {
    constructor(name, role) {
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold lines");
    }
    scout() {
        console.log(`${this.name} is scouting ahead`);
        super.roll();
    }

    loot(...items) {
        const roll = this.roll();
        if (roll > 5) {
            console.log(`${this.name} is looting area for items...
                found ${items.join(", ")}`)
                this.inventory.push(...items);
        } else {
            console.log(`${this.name} failed to find anything...`)
        }
    }

    usehealthPotion() {
        if (this.inventory.includes('potion')) {
            if ((this.health + 25) > 100) {
                this.health = 100;
            } else {
                this.health += 25;
            }
            //remove the potion
            this.inventory.splice(this.inventory.indexOf('potion'), 1);
        }
    }
}
robin.loot("sword", "potion", "artifact");

