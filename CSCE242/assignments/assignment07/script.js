document.getElementById("btn-stairs").onclick = (event) => {
    const staircase = document.getElementById("stairs");
    for(let i = 0; i < 10; i++){
        const treads = document.createElement("tread");
        treads.before(document.getElementById("climbing-man"));
        treads.classList.add("testingstair");
        staircase.append(treads);
    }
    document.getElementById("climbing-man").classList.remove("hidden");
    document.getElementById("btn-climb").classList.remove("hidden");
    event.currentTarget.disabled = true; //can only be clicked once
}

let timer;
document.getElementById("btn-climb").onclick = (event) =>{
    const climbingman = document.getElementById("climbing-man");
    let position = 336;
    timer = setInterval(()=>{
        if(position > 0){
            position -= 20;
            climbingman.style.top = position + "px";
            if(climbingman.src.endsWith("images/left.png")){//actual path is much longer than "images/left.png"
                climbingman.src = "images/right.png";
            }
            else if(climbingman.src.endsWith("images/right.png")){
                climbingman.src = "images/left.png";
            }
        }
        else{
            clearInterval(timer);//timer can be cleared inside of the timer loop!
        }
    }, 500);
    
}