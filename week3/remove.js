// remove all elements from array that callback function 
// returns truthy for (and mutate the original array).
function remove(items, callback) {
    	items.forEach(function(element, i, items){
            if (callback(element)) {
                items.splice(i,1) 
            }
        })

	return items;  
}

// removerFunction should return true when the value begins 
// with the letter 't' or the letter 'T'. Otherwise it should return false.
function removerFunction(element) {
    return element.toLowerCase().charAt(0) == "t" ? true : false

    return item;
    // console.log(item)	
    // console.log(`no t array is ${noTArray}`);
    // return noTArray;
	// array.map(function(currentValue, index, arr), thisValue)

	// Should return true if item begins with 't' and false otherwise
}


let people = ["tanya", "sue", "john", "garret"];
let removed = remove(people, removerFunction)
// let removed = removerFunction(people)
console.log(removed)
// module.exports = {remove, removerFunction};
