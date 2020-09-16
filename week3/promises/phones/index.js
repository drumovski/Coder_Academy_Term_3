const phones = require(`./phones`).phones

const last2YearCheck = (years) => {
    try {
        let newYears = []
        newYears = years.filter(x => {
            if (x.year <= 2020 && x.year >= 2018 ){
                return x;
            }
        })
        // console.log("newYears is", newYears)
        if (newYears.length > 0) {
            return newYears
        } else {
            throw "nothing found from the last 2 years"
        }
    }
    catch(err){
        return err
    } 
}

const notAppleOrGoogle = (manufacturers) => {
    try {
        let newManufacturers = []
        newManufacturers = manufacturers.filter(x => {
            if (x.manufacturer != "Apple" && x.manufacturer != "Google" ){
                return x;
            }
        })
        if (newManufacturers.length > 0) {
            return newManufacturers
        } else {
            throw "No phones from other manufacturers found";
        }
    }
    catch(err){
        return err
    } 
}


// const afford
const afford = (wallet, cost) => {
    try {
        let budgetPhones = []
        budgetPhones = cost.filter(x => {
            if (x.cost < wallet ){
                // console.log("cost-x", x)
                return x;
            }
        })
        if (budgetPhones.length > 0) {
            return budgetPhones
        } else {
            throw "Not enough money to purchase something today";
        }
    }
    catch(err){
         return err
    }    
}

// const afford = (wallet = 500, data) => {
//     try{
//         data = data.filter(function(item){return item.cost <= 500 })
//         if (data.length > 0){
//             return data
//         } else {
//             throw "Not enough money to purchase something today"
//         }
//     }
//     catch(err){
//         return err
//     }
// }



 
// let promise1 = (data) => {
//     return new Promise((resolve, rej) => {
//         if(data.length > 0){
//             resolve(data)
//         } else {
//             rej('The data does not exist')
//         }
//     })
// }


let promise1 = (phones) => {
    return new Promise((resolve, reject) => {
        phones.length > 0 ? resolve(phones) : reject("nothing in array")
    })
}
// console.log(phones)
const wallet = 500
const options = promise1(phones)
.then(last2YearCheck)
.then(notAppleOrGoogle)
.then(x => afford(wallet, x))
.then(x => console.log(x))
.catch(err => console.log(`error is ${err}`))


console.log("options is ", options)
// module.exports = {
    // last2YearCheck, notAppleOrGoogle, afford, options
// }

// const oldYears = [{year: 2000}, {year: 2010}, {year: 2009}, {year: 2008}, {year: 2002} , {year: 1010}]
// const years = [{year: 2020}, {year: 2020}, {year: 2019}, {year: 2018}, {year: 2022} , {year: 2010}]
// console.log("years", last2YearCheck(years))
// console.log("old years", last2YearCheck(oldYears))
// const manufacturers = [{manufacturer: "Xiaomi"}, {manufacturer: "Samsung"}, {manufacturer: "OnePlus"}, {manufacturer: "Google"}, {manufacturer: "Apple"}, {manufacturer: "Motorola"} ]
// console.log(notAppleOrGoogle(manufacturers))
// const wallet = 500
// const costs = [{cost: 898.00}, {cost: 269.99}, {cost: 279.00}, {cost: 467.33}, {cost: 625.00}, {cost: 344.04}, {cost: 150.00}]
// console.log(afford(wallet, costs))
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
