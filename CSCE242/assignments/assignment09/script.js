class Cat{
    constructor(name, image, coat, character, personality, price){
        this.name = name;
        this.image = image;
        this.coat = coat;
        this.character = character;
        this.personality = personality;
        this.price = price;
    }
}
window.onload = ()  => {
    let catlist = [];
    catlist.push(new Cat("Ragdoll", "images/ragdoll.jpg", "Longhair", "Large, with rounded blue eyes and color at points", "Docile", "$2,500"));
    catlist.push(new Cat("Sphynx", "images/sphynx.jpg", "Bald", "Medium size, visible wrinkling and large ears", "Active", "$1,500"));
    catlist.push(new Cat("Abyssinian", "images/abyssinian.jpg", "Shorthair", "Medium size, dense fur and almond shaped eyes", "Busy", "$2,800"));
    catlist.push(new Cat("Maine Coon", "images/mainecoon.jpg", "Longhair", "Large, with a thick coat, tufted ears, and expressive eyes", "Easy-going", "$3,000"));
    catlist.push(new Cat("Devon Rex", "images/devonrex.jpg", "Shorthair", "Small, with large eyes, elf-like ears, and a curly coat", "Court Jester", "$2,000"));

    const section = document.getElementById("cats");
    for(let i in catlist){
        const catdiv = document.createElement("div");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");

        catdiv.classList.add("catinfo");
        section.append(catdiv);
        catdiv.append(h3);
        catdiv.append(img);
        h3.innerHTML = catlist[i].name;
        img.src = catlist[i].image;

        catdiv.onclick = () => {
            document.getElementById("popup").style.display = "block";
            document.querySelector("#popup h2").innerHTML = catlist[i].name;
            document.querySelector("#popup img").src = catlist[i].image;
            document.querySelector("#popup p").innerHTML = `<strong>Coat Length:</strong> ${catlist[i].coat} <br>
            <strong>Characteristics:</strong> ${catlist[i].character} <br>
            <strong>Personality:</strong> ${catlist[i].personality} <br>
            <strong>Price:</strong> ${catlist[i].price}`;
        };
    }
};