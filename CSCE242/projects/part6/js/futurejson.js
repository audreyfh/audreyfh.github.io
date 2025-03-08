const getTrinkets = async() => {
    const url = "https://audreyfh.github.io/json/trinkets.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

window.onload = async() => {
    const trinkets = await getTrinkets();
    const main = document.getElementById("futuremain");
    const columns = document.createElement("columns");
    main.append(columns);
    
    trinkets.forEach((trinket) => {
        const divimg = document.createElement("div");
        divimg.classList.add("collection");
        const a = document.createElement("a");
    });
}