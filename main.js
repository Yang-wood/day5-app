
const shortcut = document.querySelector(".shortcut");

shortcut.addEventListener("click", showLayer);

const window = 

window.addEventListener("dbclick", hideLayer);

function showLayer(){
    const layer1 = document.querySelector("#layer1");
    layer1.style.display = "block";
}

function hideLayer(){
    const layer1 = document.querySelector("#layer1");
    layer1.style.display = "none";
}

const goBtn = document.querySelector(".login-btn");

goBtn.addEventListener("click", goSomeWhere);

function goSomeWhere(){
    location.href = "https://nid.naver.com/nidlogin.login?mode=form&url=https%3A%2F%2Fwww.naver.com%2F";
}