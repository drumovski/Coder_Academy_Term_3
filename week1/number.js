function f(input1,input2) {
    if (input1>input2) {
        console.log(input1 + " is greater than " + input2)
    } else if (input1<input2){
        console.log(input2 + " is greater than " + input1)
    } else if (input1 === input2) {
        console.log(input1 + " is equal to " + input2)
    } else {
        console.log("enter a number, numnuts")
    }
}
f(13,12)
f(10,12)
f(11,11)
f("hello", 34)
