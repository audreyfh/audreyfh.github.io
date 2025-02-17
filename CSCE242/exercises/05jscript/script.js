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

//key up
document.getElementById("emotion-txt").onkeyup = (event) => {
    //const emotion = document.getElementById("emotion-txt").value;
    document.getElementById("feeling-display").innerHTML = "You are feeling "+ event.currentTarget.value;
};

//Showing the color
document.getElementById("btn-colorchange").onclick = () => {
    console.log("color button clicked");
    const color = document.getElementById("color-input").value.toLowerCase().trim();
    let mood = "";

    if(color == "blue"){
        mood = "grumpy >:(";
    }
    else if(color == "yellow"){
        mood = "mellow B)";
    }
    else{
        mood = "undefined";
    }
    document.getElementById("color-message").innerHTML = `You chose ${color}. You are feeling ${mood}`
};

let pos = 0;
const changeCirclePos = (increment) =>{
    pos += increment;
    document.getElementById("circle").style.setProperty("top", pos + "px");
};

/*Moving Circle*/
document.getElementById("btn-down").onclick = () => {
    changeCirclePos(10);
};

document.getElementById("btn-up").onclick = () => {
    changeCirclePos(-10);
};

document.getElementById("btn-pick-color").onchange = (event) => {
    const color = event.currentTarget.value;
    document.getElementById("circle").style.setProperty("--circle-color", color);
};

/*Donation Thermometer*/
const goal = 1000;
let donations = 0;

document.getElementById("goal-display").innerHTML = `Goal: $${goal}`;

document.getElementById("btn-add-dono").onclick = () => {
    //validate donation amount
    const donation = document.getElementById("txt-donation").value;
    document.getElementById("donation-error").classList.add("hidden");

    if(isNaN(donation) || donation <= 0){
        document.getElementById("donation-error").classList.remove("hidden");
        return;
    }
    //update donation
    donations += donation;
    donationPercent = donations / goal * 100;
    console.log(donations);
    //show donation message
    document.getElementById("donation-total").innerHTML = `$${goal - donations} to go!`;

    //update thermometer
    document.getElementById("thermometer").style.setProperty("--donation-percent", donationPercent + "%");
};

//toggling the nav
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};