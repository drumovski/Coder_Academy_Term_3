// EXAMPLE 1
x = 1 //initialize
console.log(x) // execute
var x //declare

// EXAMPLE 2
console.log(y) //execute
var y //declare
y = 1 //initialize

// Is hoisting possible ? -- Yes
// What is the output and why ? 
// The output is undefined because the variable "y" is initialized after it is used so when the console.log statement is executed, the value of y is still undefined.

// EXAMPLE 3
console.log(z)
z = "Hello World"
var z

// Is hoisting possible ? -- Yes
// What is the output and why ? 
// The result is undefined as z has been declared but not initialized

console.log(c)
var c = "c"
// Undefined

// So what we infer from this is that "var" declarations get hoisted automatically and are initialized to UNDEFINED. 
// The result however depends on where they are initialized and where they are called / used.

// Now lets see how the variables declared as "let" behave if used before declaring and initializing them

console.log(d)
let d = "D"
// ReferenceError: d is not defined

// Hoisting as a concept works for all variables. 
// For "let" or "const", if the variables are accessed at a point in time which is in between hoisitng them and initializing them , then a reference error is thrown.

// In the above example, the "let d" has been hoisted during the first step
// Next when the execution of the code happens line by line, the console.log statement is encountered before the value "D" gets assigned to the variable d

