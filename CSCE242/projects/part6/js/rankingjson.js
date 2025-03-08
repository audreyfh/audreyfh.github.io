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
    const content = document.getElementById("content");
    const main = document.createElement("main");
    content.append(main);
    const div = document.createElement("div");
    div.classList.add("columns");

    trinkets.forEach((trinket)=>{
        const ranking = trinket.ranking_id;
        if(ranking == 1 || ranking == 2 || ranking == 3){
            if(ranking == 1){
                const section = document.createElement("section");
                section.classList.add("firstplace");
                const a = document.createElement("a");
                a.href = "example-trinket.html";
                const firstdiv = document.createElement("div");
                a.append(firstdiv);
                const h2 = document.createElement("h2");
                h2.innerHTML = `First Place: ${trinket.name}`;
                firstdiv.append(h2);
                const firstimg = document.createElement("img");
                firstimg.classList.add("firstplaceimg");
                firstimg.src = trinket.image5by4;
                firstdiv.append(firstimg);
                a.append(firstdiv);
                section.append(a);
                main.append(section);
            } else if(ranking == 2 || ranking == 3){
                const divrank = document.createElement("div");
                divrank.classList.add("ranking");
                const a = document.createElement("a");
                const img = document.createElement("img");
                img.src = trinket.imagesquare;
                img.classList.add("squareimg");
                a.append(img);
                const h3 = document.createElement("h3");
                if(ranking == 2)
                    h3.innerHTML = `Second Place: ${trinket.name}`;
                else
                    h3.innerHTML = `Third Place: ${trinket.name}`;
                a.append(h3);
                divrank.append(a);
                div.append(divrank);
            } 
        }   
    });
    main.append(div);
}