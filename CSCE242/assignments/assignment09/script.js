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
    const ragdoll = new Cat("Ragdoll", "images/ragdoll.jpg", "Longhair", "Large, with rounded blue eyes and color at points", "Docile", "$2,500");
    const sphynx = new Cat("Sphynx", "images/sphynx", "Bald", "Medium size, visible wrinkling and large ears", "Active", "$1,500");
    const abyssinian = new Cat("Abyssinian", "images/abyssinian.jpg", "Shorthair", "Medium size, dense fur and almond shaped eyes", "Busy", "$2,800");
    const mainecoon = new Cat("Maine Coon", "images/mainecoon.jpg", "Longhair", "Large, with a thick coat, tufted ears, and expressive eyes", "Easy-going", "$3,000");
    const devonrex = new Cat("Devon Rex", "images/devonrex.jpg", "Shorthair", "Small, with large eyes, elf-like ears, and a curly coat", "Court Jester", "$2,000");
};