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
    const main = document.getElementById("trinketformat");
    trinkets.forEach((trinket)=>{
        if(trinket.ranking_id == 3){/*In the future, I'll instead compare it to a variable which corresponds to the trinket clicked on 
            the collection page (don't know how to do this right now)*/
            const h1 = document.createElement("h1");
            h1.innerHTML = `${trinket.name} (EXAMPLE)`;
            h1.classList.add("trinketh1");
            main.append(h1);
            const img = document.createElement("img");
            img.src = trinket.image5by4;
            img.classList.add("fivebyfourimg");
            main.append(img);
            const p = document.createElement("p");
            p.innerHTML = `<strong>Year:</strong> ${trinket.year}<br>`;
            p.innerHTML += `<strong>Est. Value:</strong> ${trinket.value}<br>`;
            p.innerHTML += `<strong>Country of Origin:</strong> ${trinket.origin}<br>`;
            p.innerHTML += `<strong>Description:</strong> ${trinket.description}<br>`;
            p.innerHTML += `<strong>Audrey's Rating</strong> ${trinket.rating}<br>`;
            p.innerHTML += `<strong>Rank: ${rankingHelper(trinket.ranking_id)}`;
            

            main.append(p);
        }
    })
}
/*Will write full function which adds correct suffix for all letters later (i.e. "33rd" instead of "33th") */
function rankingHelper(number){
    if(number == 1)
        return `${number}st place`;
    else if(number == 2)
        return `${number}nd place`;
    else if(number == 3)
        return `${number}rd place`;
    else
        return `${number}th place`;
}