/*
Taking the below variable, using the postcode, 
- copy the user element into the relevant state
SA = 5000, Qld = 4000 , Vic = 3000, NSW = 2000
*/

const users = [
    {
        id: 1,
        name: "Name 1",
        group: "Educator",
        location: {
                Street: "1 Dutch Lane",
                Suburb: "Biscuit",
                postcode: 4324
        }
    },
    {
        id: 2,
        name: "Name 2",
        group: "Educator",
        location: {
            Street: "1 chocolate Lane",
            Suburb: "cookie",
            postcode: 5431
        }
    },
    {
        id: 3,
        name: "Name 3",
        group: "Student",
        location: {
            Street: "1 Wagon Street",
            Suburb: "Wheel",
            postcode: 2334
        }
    },
    {
        id: 4,
        name: "Name 4",
        group: "Student",
        location: {
            Street: "1 Strawberry Circuit",
            Suburb: "Sundae",
            postcode: 3321
        }
    },
    {
        id: 5,
        name: "Name 5",
        group: "Mentor",
        location: {
            Street: "1 Inspiration Way",
            Suburb: "Turn it Around",
            postcode: 3333
        }
    }
]

let queensland = []
let newSouthWales = []
let victoria = []
let southAustralia = []

function setState(x){
    return x.location.postcode.toString().charAt(0)
}

users.forEach(x => {
    switch(setState(x)){
        case "4":
        queensland.push(x);
        // console.log(x)
        break;
        case "3":
        victoria.push(x);
        break;
        case "2":
        newSouthWales.push(x);
        break;
        case "5":
        southAustralia.push(x);
        break;
        }
    });


// console.log(queensland);
// console.log(southAustralia)
// console.log(newSouthWales)
console.log(victoria)
console.log(`South Australia is ${southAustralia}`)
console.log(`NSW is ${newSouthWales}`)
console.log(`Queensland  is ${queensland}`)
// Just incase you get syntax being a pain
// var test = otherThing.forEach((x) => {
// 	lots;
// 	of;
// 	stuff;
// })


module.exports = {
    queensland, newSouthWales, victoria, southAustralia
}
