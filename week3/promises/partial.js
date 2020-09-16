let onReject = (err) => {console.error(`Promise machine broke: ${err}`)}
let onResolve = (val) => {console.log(`Promise machine went brrrrrr and gave us: ${val}`)}
let onResolveTwo = (x) => {console.log(`I will have a val of: ${x}`)}

// write a promise that takes a bool and resolves if true and rejects if false
// if we resolve, return a random number 0<=x<1
// if we reject, throw an error with whatever msg you'd like
let boolPromise = (b) => {
    return new Promise((resolve, reject) => {
        b ? resolve(Math.random()) : reject("what the heck?!")
    })
}

// Validate it works as intended
// boolPromise(true).then(onResolveTwo, onReject)
// boolPromise(false).then(onResolve, onReject)

// write a method that takes a number, and returns that number +1 as a promise
// reject case is if it's less than 0
let addOneAsPromise = (x) => {
    return new Promise((resolve, reject) => {
        x >= 0 ? resolve(x + 1) : reject("can't remember the message he wanted, something about negativity")
    })
}

// Validate it works as intended
// addOneAsPromise(3).then(onResolve, onReject)
// addOneAsPromise(-1).then(onResolve, onReject)

// Add several more simple arithmetic functions to a promise chain
// // Validate it works as intended
// addOneAsPromise(-1)
//     .then(alex => alex*3)
//     .then(lachy => lachy + 5)
//     .then(onResolve)
//     .catch(err => console.log(`no! brih ${err}`))

// Now lets try and use promises to apply a function over all of an arr
// First step: build an array of promises with x +1
let promiseArr = [...Array(10).keys()].map((x) => {
    return addOneAsPromise(x+5)
})

// Second step: print an array of the even numbers
// Promise
//     .all(promiseArr)
//     .then(promiseArr => console.log(promiseArr.filter(eachPromise => eachPromise % 2 == 0)))
// Promise.all(promiseArr).then(x => console.log(x))


// Build another array of promises
// Reject a promise if the value of the promise is 5 otherwise double it
let promiseArrWithErr = [...Array(10).keys()].map((x) => {
    return addOneAsPromise(x)
        .then((x) => x != 5 ? x * 2 : Promise.reject("No fives!"))
})

// Print promiseArrWithErr to validate (don't forget a catch clause)
// Promise.all(promiseArrWithErr)
//     .then((promiseArr) => console.log(`IT WORKED! ${promiseArr}`),
//     (reject) => console.log(`this is the rejection: ${reject}`))
// Print promiseArrWithErr to validate, even if one of them is rejected
Promise.allSettled(promiseArrWithErr).then((x) => console.log(x))
