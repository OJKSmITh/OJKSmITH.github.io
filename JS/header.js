const btn = document.querySelector("#btn")

btn.addEventListener("click", function (e) {
    const nav = document.querySelector("#nav")
    nav.style.display = "block"
})

btn.addEventListener("blur", function (e) {
    const nav = document.querySelector("#nav")
    nav.style.display = "none "
})