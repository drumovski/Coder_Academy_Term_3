const phones = require(`./phones`)

const last2YearCheck = (years) => {
        let newYears = []
        newYears = years.filter(x => {
            if (x.year <= 2020 && x.year >= 2018 ){
                console.log("x", x)
                return x;
            }
        })
        console.log("newYears is", newYears)
        if (newYears) {
            return newYears
        } else {
            // return "nothing found from the last 2 years";
            return newYears = []
        }
    // return new Promise((resolve, reject) => {
    // })
}

const notAppleOrGoogle = (manufacturers) => {
        let newManufacturers = []
        newManufacturers = manufacturers.filter(x => {
            if (x.manufacturer != "Apple" && x.manufacturer != "Google" ){
                console.log("man-x", x)
                return x;
            }
        })
        console.log("newManufacturers is", newManufacturers)
        if (newManufacturers) {
            return newManufacturers
        } else {
            return "No phones from other manufacturers found";
        }
    // return new Promise((resolve, reject) => {
    // })
}


// const afford
const afford = (wallet, cost) => {
        let budgetPhones = []
        budgetPhones = cost.filter(x => {
            if (x.cost < wallet ){
                console.log("cost-x", x)
                return x;
            }
        })
        console.log("budgetPhone are", budgetPhones)
        if (budgetPhones) {
            return budgetPhones
        } else {
            return "Not enough money to purchase something today";
        }
    // return new Promise((resolve, reject) => {
    // })
}

// const options = 
// module.exports = {
    // last2YearCheck, notAppleOrGoogle, afford, options
// }

const oldYears = [{year: 2000}, {year: 2010}, {year: 2009}, {year: 2008}, {year: 2002} , {year: 1010}]
const years = [{year: 2020}, {year: 2020}, {year: 2019}, {year: 2018}, {year: 2022} , {year: 2010}]
console.log("years", last2YearCheck(years))
console.log("old years", last2YearCheck(oldYears))
const manufacturers = [{manufacturer: "Xiaomi"}, {manufacturer: "Samsung"}, {manufacturer: "OnePlus"}, {manufacturer: "Google"}, {manufacturer: "Apple"}, {manufacturer: "Motorola"} ]
console.log(notAppleOrGoogle(manufacturers))
const wallet = 500
const costs = [{cost: 898.00}, {cost: 269.99}, {cost: 279.00}, {cost: 467.33}, {cost: 625.00}, {cost: 344.04}, {cost: 150.00}]
console.log(afford(wallet, costs))
// ### Problem Statement
// Make sure that this is done with Promises.

// You are required to replace your phone due to an unfortunate 
// altercation between it and the wall.

// #### You have a couple of tests that you run any big purchase against

// 1. It needs to have been made in the last 2 years.
// 2. You don't believe in the big 2. No Apple or Google
// 3. Can you afford it. Nan's birthday won't pay for itself so you can 
// only afford $500.00

// #### Each of these need:

// - to be standalone functions
// - to return an array of objects
// - be eventually passed to the options function that will result
// in an array of objects of the best options.
