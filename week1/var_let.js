function f(input) {
    var a = input;

    if (true) {
        console.log(a)
        var a = input + 1;
        console.log(a)
        console.log("Inside if - after var a re-declaration : scope local: " + a);
    }

    console.log("Inside function - scope global: " + a);
}

f(11)

