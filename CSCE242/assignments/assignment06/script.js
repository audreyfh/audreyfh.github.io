document.getElementById("exercise-1").onclick = () => {
    document.getElementById("traveling").classList.remove("hide-section");
    document.getElementById("heart").classList.add("hide-section");
};
document.getElementById("exercise-2").onclick = () => {
    document.getElementById("heart").classList.remove("hide-section");
    document.getElementById("traveling").classList.add("hide-section");
};

/*Mode of Transportation*/
document.getElementById("travel-type").onkeyup = (event) => {
    if(event.currentTarget.value == "bike"){
        document.getElementById("transportation-img").src = "images/bicycle.jpg";
    } else if(event.currentTarget.value == "scooter"){
        document.getElementById("transportation-img").src = "images/scooter.jpg";
    } else if(event.currentTarget.value == "car"){
        document.getElementById("transportation-img").src = "images/car.jpg";
    } else if(event.currentTarget.value == "skateboard"){
        document.getElementById("transportation-img").src = "images/skateboard.jpg";
    } else{
        document.getElementById("transportation-img").src = "";
    }
};
/*Change heart color*/
function changeColor(e) {
    const heart = document.getElementById("heart-color");
    heart.classList.remove("red", "green", "blue");
    const color = e.target.dataset.color;
    document.getElementById("heart-color").classList.add(color);
}
const colorbuttons = document.querySelectorAll("section button");
colorbuttons.forEach((colorbtn) => {
    colorbtn.onclick = changeColor;
});

/*Dropdown*/
document.getElementById("dropdown").onclick = () => {
    const navColumns = document.getElementById("navcolumns");
    navColumns.classList.toggle("hide");
    if (navColumns.classList.contains("hide")) {
        document.getElementById("dropdown").innerHTML = `<a href="#">&#11167</a>`;
    } else {
        document.getElementById("dropdown").innerHTML = `<a href="#">&#11165</a>`;
    }
};