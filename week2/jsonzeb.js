// Write an extension for array that allows us to randomly sample a value
Array.prototype.sample = function() {
    return this[Math.floor(Math.random() * this.length)];
}

// Lets get a collection of a few adjectives
let adjectives = ["sweet", "fast", "awesome", "gun", "truant", "hotwings"];

// Read in the file house.json
let house = require("./house.json");

// Select only the chickens subset of the data
console.log("SHOW ME THE CHICKENS!");
console.log(house.chickens);

// Get a list of the chickens names
let chickenNames = house.chickens.map(c => c.name);
console.log("WHO ARE THE CHICKENS?!");
console.log(chickenNames);

// Give the chickens epithets
// Sicky the hotwings
// let newChickenNames = chickenNames.map( x => `${x} the ${adjectives.sample()}`);
let [...newChickenNames] = house.chickens.map(chick => `${chick.name} the ${adjectives.sample()}`);
console.log(newChickenNames);

// Write out a file of just the chickens
const fs = require('fs');
fs.writeFile('week2/chickens.json', JSON.stringify(newChickenNames), err => {
    if (err) {
        console.log('error happend')
    } else {
        console.log('updated JSON file')
    }
});

