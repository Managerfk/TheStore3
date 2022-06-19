const bar = document.querySelector(".fa-bars")
const menu = document.querySelector(".nav-main")

bar.addEventListener("click", () => {
    menu.classList.toggle("show-menu")

});