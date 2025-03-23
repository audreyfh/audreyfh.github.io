const getTrinkets = async() => {
    const url = "https://audreyfh.github.io/json/trinkets.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

window.onload = async()=>{
    const trinkets = await getTrinkets();
    /*Currently, this is an example collection which just contains the top three rated trinkets.*/
    const main = document.getElementById("excollectionmain");
    trinkets.forEach((trinket)=>{
        trinket.categories.forEach((category)=>{
            if(category == "example"){
                const columns = document.createElement("div");
                columns.classList.add("columns");

                const imgdiv = document.createElement("div");
                imgdiv.classList.add("collection");
                const img_a = document.createElement("a");
                img_a.href = "example-trinket.html";
                const img = document.createElement("img");
                img.classList.add("squareimg");
                img.src = trinket.imagesquare;
                img_a.append(img);
                imgdiv.append(img_a);
                columns.append(imgdiv);

                const contentdiv = document.createElement("div");
                contentdiv.classList.add("collection");
                const content_a = document.createElement("a");
                content_a.href = "example-trinket.html";
                const h3 = document.createElement("h3");
                h3.innerHTML = trinket.name;
                content_a.append(h3);
                const p = document.createElement("p");
                p.innerHTML = `<strong>Year:</strong> ${trinket.year}<br>`;
                p.innerHTML += `<strong>Est. Value:</strong> ${trinket.value}<br>`;
                p.innerHTML += `<strong>Country of Origin:</strong> ${trinket.origin}<br>`;
                p.innerHTML += `<strong>Description:</strong> ${trinket.description}<br>`;
                p.innerHTML += `<strong>Rating</strong> ${trinket.rating}`;
                content_a.append(p);
                contentdiv.append(content_a);
                columns.append(contentdiv);
                main.append(columns);
            }
        });
    });
}