const getTrinkets = async() => {
    const url = "https://audreyfh.github.io/json/trinkets.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

window.onload = async() =>{
    const trinkets = await getTrinkets();
    const home = document.getElementById("home-main");
    const div = document.createElement("div");
    home.append(div);
    trinkets.forEach((trinket)=>{
        trinket.categories.forEach((category)=>{
            if(category == "home"){
                const section = document.createElement("section");
                section.classList.add("row1of3");
                const a = document.createElement("a");
                a.href = "example-trinket.html";
                const img = document.createElement("img");
                img.src = trinket.imagetwobyone;
                img.classList.add("sub-image");
                a.append(img);
                const h3 = document.createElement("h3");
                h3.innerHTML = trinket.name;
                a.append(h3);
                section.append(a);
                div.append(section);
            }
        });
    });
}
