let result = "";

function printResult(result) { // receive theResult ("winner") and print to console
	console.log(result);
}

function sendResult(theResult) { //theResult becomes "winner"
	return new Promise((resolve, reject) => { //create promise
		setTimeout(() => resolve(theResult), 1000 ); //return theResult after timeout
	})
}

sendResult("winner") // call sendResult with paramater "winner"
.then(printResult); //receive theResult ("winner"), pass it on to printResult


// Test your understanding of promises

// Step 1: Write comments for the code to make sure you are understand what 
// is happening

// Step 2: Refactor the call to sendResult and printResult to handle the 
// promise returned so that it results in printing "winner" to console log



// Note: The test for this challenge is a simple output test that passes 
// when your program successfully logs "winner". It does not use jest, so 
// there are no test files downloaded with git.

