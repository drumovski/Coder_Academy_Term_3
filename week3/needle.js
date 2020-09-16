function findNeedle(haystack) {
    // VERSION ONE - MATHS
  let width = haystack[0].length            //width of matrix
  let nIndex = haystack.flat().findIndex((n) => n == 'N') //index of N in entire flattened array - in example - 31
  x = Math.floor(nIndex/width)               //find vertical position x by dividing by number of arrays 31 / 7 = 4.4
  y = nIndex % width                         // find horizontal position within the x array by getting the remainder of nIndex/width (x)
return[x,y]
}

    //VERSION 2 - LOOP IN LOOP
function findNeedle2(haystack) {
  x = haystack.findIndex((outer) => {       // outer findIndex - assigns x to vertical position
     y = outer.findIndex((inner) => inner == 'N');  // inner findIndex assigns y to horizontal position
     return y != -1;                    // returns true or false to inner findIndex. y will be -1 while "N" is not found - used as trigger for inner findIndex
  })

return[x,y]
}

// Don't change this
module.exports = {
  findNeedle,
};

var y = 0
var x = 0
const haystack = [
      ['H', 'H', 'H', 'H', 'H', 'H', 'H'],
      ['H', 'H', 'H', 'H', 'H', 'H', 'H'],
      ['H', 'H', 'H', 'H', 'H', 'H', 'H'],
      ['H', 'H', 'H', 'H', 'H', 'H', 'H'],
      ['H', 'H', 'H', 'N', 'H', 'H', 'H'],
    ];
console.log(findNeedle(haystack)) 
console.log(findNeedle2(haystack)) 
