
const shortcut = document.querySelector(".shortcut");

shortcut.addEventListener("click", showLayer);

window.addEventListener("dblclick", hideLayer);

function showLayer(){
    const layer1 = document.querySelector("#layer1");
    layer1.style.display = "block";
}

function hideLayer(){
    const layer1 = document.querySelector("#layer1");
    layer1.style.display = "none"; }

const goBtn = document.querySelector(".login-btn");

goBtn.addEventListener("click", goSomeWhere);

function goSomeWhere(){
    location.href = "https://nid.naver.com/nidlogin.login?mode=form&url=https%3A%2F%2Fwww.naver.com%2F";
}

// 폼 검색을 요청하면 (=검색어를 입력하고, 검색 버튼을 누를떄)

const searchForm = document.querySelector("#search_form")

searchForm.addEventListener ("click", getResult);

function getResult(e){
    e.preventDefault();
    fetch('http://localhost:3000/news')
      .then(response => response.json())
      .then(json => console.log(json))
}