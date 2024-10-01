function dungeonestDark(rooms) {
    let health = 100;
    let coins = 0;

    let roomArray = rooms[0].split('|');

    for (let i = 0; i < roomArray.length; i++) {
        let [item, number] = roomArray[i].split(' ');
        number = Number(number);

        if (item === "potion") {
            let healed = Math.min(100 - health, number);
            health += healed;
            console.log(`You healed for ${healed} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (item === "chest") {
            coins += number;
            console.log(`You found ${number} coins.`);
        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${item}.`);
            } else {
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            }
        }
    }

    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])