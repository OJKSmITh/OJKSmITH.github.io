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
});


