const videoHead = document.querySelector(".videoHead>img")

function init() {
    window.open("popup.html", "팝업테스트", "width=400, height =300, top=10, left=10")
}

videoHead.addEventListener("click", init)