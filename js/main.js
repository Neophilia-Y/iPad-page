const basketStarterEl = document.querySelector("header .basket-starter");
const basketEl = basketStarterEl.querySelector(".basket");

basketStarterEl.addEventListener("click", (e) => {
    basketEl.classList.toggle("show");
    e.stopPropagation();
})
basketEl.addEventListener("click", (e) => {
    e.stopPropagation();
})

window.addEventListener("click", () => {
    basketEl.classList.remove("show");
})