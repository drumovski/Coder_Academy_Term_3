// Create a function that will take any number of arguments. 
// Multiply all these arguments together, and return the result. 
// If no arguments are entered, return 0.

// E.g. multipleArguments(1, 2, 3, 4, 5, 6, 7), should return 5040

//total = flattenedArr.reduce((total, x) => total + x);

const multipleArguments = (...args) => {
	// Your code here
	// console.log(args)
	if (args.length != 0){
	let array1 = args.reduce((total, x) => total * x);
	console.log(array1)
	}
}

// Don't alter the lines below
// module.exports = {
// 	multipleArguments
// }
multipleArguments(1, 2, 3, 4, 5, 6,7)
multipleArguments()
