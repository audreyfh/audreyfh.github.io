const list = ["Happy Birthday", "Crazy Clown", "It's Raining", "Quiet Time", "Working Hard", "Work from Home"];
const listimages = ["images/birthday.jpg", "images/clown.jpg", "images/rain.jpg", "images/read.jpg","images/shovel.jpg","images/work.jpg"];
window.onload = () => {
    for(let i = 0; i < list.length; i++){
        const li = document.createElement("li");
        li.innerHTML = `<a href="#" id="listelement">${list[i]}</a>`;
        document.getElementById("arrays").append(li);
        li.onclick = () => {
          document.getElementById("popupImg").src = listimages[i];
          document.getElementById("popupname").innerHTML = list[i];
          document.getElementById("popup").classList.remove("hidden");
        }
    }
}
document.querySelector("#closepopup").onclick = () => {
    document.getElementById("popup").classList.add("hidden");
}
