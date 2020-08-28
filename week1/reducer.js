/*
Taking the below Array & the learning from the lesson you need to:
 - flatten it,
 - Times it by 2
 - find the average
 */
arr = [[28, 50, 33],[23,33,55,70],[1]]

flattenedArr = arr.flat();
console.log(flattenedArr);
doubledArr = flattenedArr.map(x => x*2);
console.log(doubledArr);
total = flattenedArr.reduce((total, x) => total + x);
average = total/flattenedArr.length;
console.log(total)
console.log(average)
// sum all the WAMs using reduce
// console.log(students.reduce((acc, student) => acc + student.wam, 0));

// module.exports = {
//     flattenedArr, averagedArr, arr
// }
