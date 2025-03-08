const getTrinkets = async() => {
    const url = "https://audreyfh.github.io/json/trinkets.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

/*Stores collections, used to allow me to easily add/remove collections from page as necessary
  Split into groups of 4 for display purposes*/
const collectionarray1 = ["Collectible", "Vintage", "Foreign", "Junk"];
const collectionarray2 = ["Animal", "Cute", "Doll", "Misc."];

window.onload = async() => {
    const trinkets = await getTrinkets();
    const main = document.getElementById("collectionmain");

    const columnone = document.createElement("div");
    columnone.classList.add("columns");
    const columntwo = document.createElement("div");
    columntwo.classList.add("columns");
    main.append(columnone);
    main.append(columntwo);

    collectionarray1.forEach((collection)=>{
        const section = document.createElement("section");
        section.classList.add("col1of2");
        const a = document.createElement("a");
        a.href = "example-collection.html";
        const h3 = document.createElement("h3");
        h3.innerHTML = `${collection} Trinkets`;
        a.append(h3);

        trinkets.some((trinket)=>{
            if(trinket.categories[0] == collection.toLowerCase()){
                const img = document.createElement("img");
                img.src = trinket.imagesquare;
                img.classList.add("squareimg");
                img.classList.add("collectionimg");
                a.append(img);
            }
            return trinket.categories[0] == collection.toLowerCase();
        });

        section.append(a);
        columnone.append(section);
    });

    collectionarray2.forEach((collection)=>{
        const section = document.createElement("section");
        section.classList.add("col1of2");
        const a = document.createElement("a");
        a.href = "example-collection.html";
        const h3 = document.createElement("h3");
        h3.innerHTML = `${collection} Trinkets`;
        a.append(h3);

        trinkets.some((trinket)=>{
            if(trinket.categories[0] == collection.toLowerCase()){
                const img = document.createElement("img");
                img.src = trinket.imagesquare;
                img.classList.add("squareimg");
                img.classList.add("collectionimg");
                a.append(img);
            }
            return trinket.categories[0] == collection.toLowerCase();
        });
        
        section.append(a);
        columntwo.append(section);
    });
}