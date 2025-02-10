//version 1: arrow function

//alert("hello"); annoying popup
//console.log("hi me"); in dev tools console

const doStuff = () => {
    console.log("doing stuff");
}

//do stuff when button is clicked
document.getElementById("btn-click-me").onclick = doStuff;
