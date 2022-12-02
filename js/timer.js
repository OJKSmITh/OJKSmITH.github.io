
function init() {
    const text = document.querySelector(".introduce")
    const programImg = document.querySelector(".programImg")

    const addtext = document.createElement("div")
    addtext.setAttribute('class', 'introduce_2')
    programImg.append(addtext)
    addtext.innerHTML = "반갑습니다. 당신과 함께하고 싶은 개발자 OJKSmITH입니다."

}

setTimeout(init, 3000)

