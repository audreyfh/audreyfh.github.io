//version 1: arrow function

//alert("hello"); annoying popup
//console.log("hi me"); in dev tools console

//do stuff when button is clicked
document.getElementById("btn-click-me").onclick = () => {
    console.log("this is another way to do it");
    document.getElementById("result").innerHTML="Hi Audrey!";
};

document.getElementById("btn-color").onclick = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Goodbye";
    messageP.classList.toggle("sad");
};

document.getElementById("btn-happy").onclick = () => {
    console.log("happy clicked");
    const display = document.getElementById("display");
    display.classList.remove("hidden");
    display.classList.add("happy");
    display.innerHTML = "Good Times";

};

document.getElementById("btn-sad").onclick = () => {
    console.log("sad clicked");
    const display = document.getElementById("display");
    display.classList.remove("hidden");
    display.classList.add("sad");
    display.innerHTML = "Bad Times";

};

document.getElementById("btn-clear").onclick = () => {
    console.log("clear clicked");
    document.getElementById("display").classList.add("hidden");
};

//key down
document.getElementById("emotion-txt").onkeyup = (event) => {
    //const emotion = document.getElementById("emotion-txt").value;
    document.getElementById("feeling-display").innerHTML = "You are feeling "+ event.currentTarget.value;
    console.log(emotion);
};