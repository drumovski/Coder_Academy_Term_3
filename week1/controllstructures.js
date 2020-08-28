students = [
    {name: 'Arry Potta', wam: 70, desc: 'yer a lizard harry'},
    {name: 'Bobby Brown', wam: 95, desc: 'hey there folks, im bobby brown'},
    {name: 'Cam Awesome', wam: 100, desc: 'The taylor swift of boxing'},
    {name: 'Hodor', wam: 49, desc: 'hodor hodor hodor, god season 8 was trash'},
    {name: 'Bran Stark', wam: 1, desc: 'Kid looks like caligula, I do not trust him'}
]

// sum all the WAMs using reduce
console.log(students.reduce((acc, student) => acc + student.wam, 0));

// Find me the first student with grades under 50
console.log(students.find(student => student.wam < 50));

// All students with marks > 50
let greaterThan50 = students.filter(x => x.wam>50)
console.log(greaterThan50);
// array of the wams for students, using the map higher order function
// const map_students = students.map(x => x.wam);
// console.log(map_students)

// Tell me the desc of each student using a for of loop
// for (let student of students)
// {
//     console.log(student.name + ": " + student.desc)
// }


// tell me the keys and their corresponding values for Bran (using for in)
// let bran = students[4]
// for(let key in bran){
//     console.log(`the key is ${key} and the value is ${bran[key]}`)
// }


// Tell me the name and index of each student pls
// for (let i in students) {
//     console.log(i)
//     console.log(students[i])
// }

// for 3 iterations, tell me the desc of a student
// for (let i =0; i < 3; i++) {
//     console.log(students[i].desc)
// }

// While the student's grades are not 100, console.log "I am dissapoint"
// let i = 0
// while (i < students.length) {
//     if (students[i].wam !== 100) {
//         console.log("I am disapoint")
//     }
//     i++
// }
// grades for 4th student 0-50: f, 51-99: p, 100 hd

// let x = students[0].wam;
// switch (true) {
//     case (x <= 50):
//         console.log("fail")
//         break;
//     case (x <= 85):
//         console.log("p")
//         break;
//     case (x <= 100):
//         console.log("HD")
//         break;
// }

// harry potter prints "a wizard", bobby brown prints "a song"
// and the rest print "who?""
// switch(students[0].name) {
//     case 'Arry Potta':
//         console.log('a wizard');
//         break;
//     case 'Bobby Brown':
//         console.log('a song');
//         break;
//     default:
//         console.log('who?');
//         break;
// }



// switch(students[3].wam) {
// case 0-50:
// console.log("f")
// break;

// case 51-99:
// console.log("p")
// break;

// case 100:
// console.log("hd")
// break;

// }
// switch(students[3].wam) {
//     case 0-50:
//         console.log("f")
//         break;
//     case 51-99:
//         console.log("p")
//         break;
//     case 100:
//         console.log("hd")
//         break;
// };

// console.log(students[1].wam > 80 ? "HD" : "Fail")


// if the second student's wam is > 80, tell them they got an HD, otherwise tell them they fail
// let wam = students[1].wam
// if (wam>80){
// console.log('success')
// }else{
// console.log('fail')}



// identifier: name, val = the name field of the first object
// let nameOne = students[0].name;
// console.log(nameOne);
// let [,{name}] = students;
// console.log(name);

// identifier first to be arry potta
// let [first] = students;
// console.log(first);

// identifier first, second, and theRest
// let [x, y, ...z] = students
// console.log(x);
// console.log(y);
// console.log(z);



