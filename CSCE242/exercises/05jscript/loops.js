document.getElementById("btn-display").onclick = () => {
    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);
    const displayArea = document.getElementById("start-end-display");
    displayArea.innerHTML = "";
    const errorDisplay = document.getElementById("error-num-order");
    errorDisplay.innerHTML = "";    //clear out any previous errors
    const favMessageP = document.getElementById("fav-message");
    favMessageP.innerHTML= "";

    if(endNum < startNum) {
        errorDisplay.innerHTML = `${endNum} is less than ${startNum}.`
        return; //don't do anything else if you already have an error
    }

    for(let i=startNum; i <= endNum; i++){
        const li = document.createElement("li");
        li.innerHTML = i;
        displayArea.append(li);
        //attach event to onclick li
        li.onclick = () => {
            favMessageP.innerHTML = `You clicked ${i}.`
        }
    }
}

let count = 0;
let updateCount;
//loop through the numbers and display a count
document.querySelector("#btn-count").onclick = (event) => {
    //Start the counter
    if(event.currentTarget.innerHTML == "Start"){
        event.currentTarget.innerHTML = "Stop";
        updateCount = setInterval(()=>{
            count++;
            document.querySelector("#count-display").innerHTML = count;
        }, 500);
    } 
    //Stop the counter
    else {
        event.currentTarget.innerHTML = "Start";
        clearInterval(updateCount);
    }
};
//reset the count
document.querySelector("#btn-reset").onclick = () =>{
    count = 0;
    clearInterval(updateCount);
    document.querySelector("#btn-count").innerHTML = "Start";
    document.querySelector("#count-display").innerHTML = "";
}

//loop through an array of toys
document.querySelector("#btn-toys").onclick = (event) => {
    const toy = ["Hot Wheels", "Monster High", "Barbie", "Lego", "Bratz"];
    event.currentTarget.disabled = true; //can only be clicked once
    
    //loop through toys
    /*for(let i = 0; i < toy.length; i++){
        console.log(toy[i]);
    }*/
    
    const toyul = document.createElement("ul");
    document.getElementById("display-toys").append(toyul);
    toy.forEach((toy, i)=>{
        const toyli = document.createElement("li");
        toyli.innerHTML = `${i+1}. ${toy}`;
        toyul.append(toyli);
    });
}

document.querySelector("#btn-toydesc").onclick = () =>{
    const toys = [];
    toys["Hot Wheels"] =  "Small toy car";
    toys["Monster High"] = "Fashion dolls based on monsters";
    toys["Barbie"] = "Doll who can do anything";
    toys["lego"] = "Small, plastic bricks for building";
    toys["Bratz"] = "idk don't feel like typing more";
    const section = document.getElementById("display-toydesc");

    for(let toy in toys){
        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = `${toy}: ${toys[toy]}`;
        p.onclick = () =>{
            document.getElementById("toy-message").innerHTML = `Best ${toy} Ever. ${toys[toy]}`;
        }
    }
}

document.getElementById("btn-stairs").onclick = () => {
    const staircase = document.getElementById("stairs");
    for(let i = 0; i < 10; i++){
        const treads = document.createElement("tread");
        treads.classList.add("testingstair");
        staircase.append(treads);
    }
}