document.getElementById("hellocolumn").onclick = () => {
    console.log("hello");
    document.getElementById("hellotext").innerHTML+="hello<br>";
};
let colorpicker = document.getElementById('colorpicker');
colorpicker.addEventListener('input', () => {
  let color = colorpicker.value;
  document.getElementById("star").style.color = color;
});
document.getElementById("image").onclick = () => {
    console.log("image changed");
    document.getElementById("imageid").src = "https://picsum.photos/200";
};