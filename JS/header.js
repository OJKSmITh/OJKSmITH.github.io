const toggleBtn = document.querySelector(".navbar_togleBtn")
const menu = document.querySelector(".navbar_menu")
const icons = document.querySelector(".navbar_icons")

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active")
    icons.classList.toggle("active")
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {

        768: {
            slidesPerView: 1,  //브라우저가 768보다 클 때
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 1,  //브라우저가 1024보다 클 때
            spaceBetween: 50,
        },
    },
});




function popup() {
    var url = "popup.html"
    var name = "popup test"

    var popupX = (document.body.offsetWidth / 2) - (650 / 2)
    var popupY = (document.body.offsetHeight / 2) - (400 / 2)
    var option = `width =650, height =400, left=${popupX},top=${popupY}`

    window.open(url, name, option)
}



const sw1 = document.querySelector(".amg1")

sw1.addEventListener("click", popup)

