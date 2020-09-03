// Definition , Declaration, Statement - are all Statement
// Global execution context
// Functional Execution context

// function helloWorld(str){
//     return str
// }

// let hello = helloWorld("Hello World");

// var a = 2;
// function myFunc(a){
//     return a+= 1;
// }
// console.log(a)
// myFunc(a)
// console.log(a)

// Both console.log: is 2
// a is a primitive data type and is passed by Value to a function


// var obj = {
//     course: "FlexTrack",
//     days: 3
// }

// function myFunc(obj){
//     obj.course = "FastTrack",
//     obj.days = "5"
// }

// console.log(obj);
// myFunc(obj);
// console.log(obj);
// obj is a non primitive data type and is passed by reference to a function

// -----annonymous functions-------------

// Anonymous functions - function with no name

// STEP 1
// function(name){
//     return typeof(name)
// }

// // STEP 2
// var myFunc = function(name){
//     return typeof(name)
// }

// // STEP 3

// console.log(myFunc);
// console.log(myFunc("Waffle"));

// const evenOrOdd = function(num) {
//     return (num % 2 == 0? "even" : "odd")
// }
// console.log(evenOrOdd(6))


// -------ruby vs JS---------
// def my_func
//     puts "HEllo"
// end

// my_func

// # function myFunc(){
// #     console.log("Hello");
// # }

// # myFunc();

// [1,2,3].map do |x| 
//     x * x
// end 

// # [1,2,3].map(function(x){return x * x})

// # let square  = function(x){
// #     return x * x
// # }

// # [1,2,3].map(square)

// -------Arrow functions------------
// function fEs5(a,b){
//     console.log(a);
//     console.log(b);
// }

// fEs5(1,2);

// let fEs6 = (a,b) => {
//     console.log(a)
//     console.log(b)
// }

// fEs6(1,2)

/*
() => {...}  No input arguments . multi line function statements
x => {...}  One input argument, multi line function statements
(a,b) => {...} Multiple input arguments . multi line function statements*/

// let myFunc1 = () => {
//     console.log("Hello")
//     console.log("World")
// }


// let myFunc2 = (str) => {
//     console.log("hi")
//     console.log(str)
// }

// let sum = (a,b) => {return a + b}

// // console.log(sum(1,2))


// let myFunc3 = (city) => {return {course: "FlexTrack" , days: 3, city}}
// console.log(myFunc3("Brisbane"))

// var exampleArray = [1, "1", [1], {1: "one"},true]
// function checkDataType(){
//     examplArray.map(function(item){console.log(typeof(item))})
// }

// // checkDataType();
// // var checkDataType = () => exampleArray.map

// let arr = exampleArray.map(item => typeof(item));
// console.log(arr);

// var animals = ["kangaroo", "koala","wombat","wallaby"]
// var a = animals.map(function(animal){return animal.length})

// console.log(["kangaroo", "koala", "wombat", "wallaby"].map(animal => {return animal.length}))



// -----Functions are First Class objects------------
// let simpleArray = [1,2,3,4,function(a,b){return a + b}]
// console.log(simpleArray[4](2,3))

// let simpleObj = {
//     course: "FlexTrack",
//     days: ["Mon","tue","Wed"],
//     myFunc: () => {
//         simpleObj.days.forEach((day) => console.log(simpleObj.course + " is in session for " + day))
//     }
// }

// console.log(simpleObj.myFunc())


// -----------------Rest-----------------

// ...input
// (input1,input2,...arrayLast) => { function statements}
// function fEs5(...rest){
//     console.log(typeof(rest)? Array : Object)
//     console.log(rest)
// }

// fEs5(1,2,3,4,5,6,7)


// var type = (...rest) => {
//     console.log(typeof(rest)? Array : Object)
//     console.log(typeof(rest))
//     console.log(rest)
// }
// type(1,2,3,4,5,6,7)

// ...input
// (input1,input2,...arrayLast) => { function statements}
// function fEs5(...rest){
//     console.log(typeof(rest)? Array : Object)
//     consol.log(rest)
// }

// fEs5(1,2,3,4,5,6,7)

// const fEs5 = (a,b,...rest) => {
// console.log(a)
// console.log(b)

// console.log(Array.isArray(rest) ? 'Array' : typeof rest);// console.log(rest)
//}

// fEs5(1,2,3,4,5,6,7)
// fEs5("One","Two","Three","Four")

// let myFunc1 = (number,...rest) => {
//     return rest.map(item => { return number *  item})
// }

// console.log(myFunc1(3,1,2,3))


// --------------IIFE's--------------
let myFunc = (() => console.log("Hi"))()

myFunc



