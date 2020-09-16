// # Warning!

// In index.html, there is a div with id **warning** and a button with id `makeItRed`.

// Your task is to make the background of the the warning div red when the button is clicked. 
// Add node to the script.js file to do this.

// _Hint_: You can set style directly on a DOM node using the style property. For example:

// ele.style.color = "blue"

// where ele is a node in the DOM.

let div = document.getElementById("warning")
let button = document.getElementById("makeItRed")
button.addEventListener("click", function() {
	if (div.style.backgroundColor == "red") {
		div.style.backgroundColor = "white";
	} else {
		div.style.backgroundColor = "red";
	};
})
