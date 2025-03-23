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
    
    
    trinkets.forEach((trinket) => {
        if(trinket.ranking_id == 0){
            const columns = document.createElement("div");
            columns.classList.add("columns");
            main.append(columns);

            const divimg = document.createElement("div");
            divimg.classList.add("collection");
            const a = document.createElement("a");
            a.href = trinket.extraparam;
            const img = document.createElement("img");
            img.src = trinket.imagesquare;
            a.append(img);
            divimg.append(a);
            columns.append(divimg);

            const divcontent = document.createElement("div");
            divcontent.classList.add("collection");
            const h3 = document.createElement("h3");
            h3.innerHTML = trinket.name;
            divcontent.append(h3);
            
            const pvalue = document.createElement("p");
            pvalue.innerHTML = `<strong>Year:</strong> ${trinket.year}<br>`;
            pvalue.innerHTML += `<strong>Est. Value:</strong> ${trinket.value}<br>`;
            pvalue.innerHTML += `<strong>Country of Origin:</strong> ${trinket.origin}<br>`;
            pvalue.innerHTML += `<strong>Description:</strong> ${trinket.description}`;
            divcontent.append(pvalue);
            columns.append(divcontent);
        }
        
    });
}