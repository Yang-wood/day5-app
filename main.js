
const shortcut = document.querySelector(".shortcut");

shortcut.addEventListener("click", showLayer);

function showLayer(){
    const layer1 = document.querySelector("#layer1");
    layer1.style.display = "block";
}