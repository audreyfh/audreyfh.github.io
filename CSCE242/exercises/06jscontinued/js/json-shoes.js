/*this function will look pretty much the same every time json is needed*/
const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showShoes = async() => {
    const shoes = await getShoes();
    const shoesSection = document.getElementById("shoes-section");

    shoes.forEach((shoe)=>{
        const shoeSec = document.createElement("section");
        shoesSection.append(shoeSec);
        const h3 = document.createElement("h3");
        h3.innerHTML = shoe.name;
        shoeSec.append(h3);

        const p = document.createElement("p");
        p.innerHTML = `Brand: ${shoe.brand}`;
        shoeSec.append(p);
        
        const ul = document.createElement("ul");
        shoeSec.append(ul);
        shoe.reviews.forEach((review)=>{
            const li = document.createElement("li");
            li.append(review);
            ul.append(li);
        });
    });
};

showShoes();