let waitBeforeRandom = (napTime = 2000) => {
    return new Promise(res => {
        setTimeout(res, napTime)
    }).then(() => Math.floor(Math.random() * 100))
}

// waitBeforeRandom()
//     .then(x => {
//         return waitBeforeRandom().then(y => x + y)
//     })
//     .then(x => {
//         return waitBeforeRandom().then(y => x + y)
//     })
//     .then(console.log)

let asyncFunc = async () => {
    console.log(`first log: ${waitBeforeRandom(500)}`)
    waitBeforeRandom(500).then(x => console.log(`second log: ${x}`))
    let res = await waitBeforeRandom(500)
    console.log(`third log: ${res}`)
    return 5
}

// console.log(asyncFunc())
// console.log( await asyncFunc())
// asyncFunc().then(console.log)

let asyncSum = async (num) => {
    let arr = []
    for(let i = 0; i < num; i++) {
        let ret = await waitBeforeRandom(5000)
        arr.push(ret)
    }
    console.log(arr)
    return arr
}

let promiseSum = (num) => {
    let arr = []
    for(let i = 0; i < num; i++) {
        arr.push( waitBeforeRandom(5000) )
    }
    console.log(`The arr is: ${arr}`)
    return Promise.all(arr)
        .then(x => console.log(`The resolved arr is: ${x}`))
}

asyncSum(3)
