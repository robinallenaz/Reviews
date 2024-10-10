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

adventurer.roll()