//Basket
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

//Search
const header = document.querySelector("header");
const searchIcon = header.querySelector(".search-starter");
const searchClose = header.querySelector(".search-wrap .search-close");
const shadowEl = header.querySelector(".search-wrap .shadow");
const showSearch = () => {
    header.classList.add("searching");
    document.documentElement.classList.add("fixed");
}
const hideSearch = () => {
    header.classList.remove("searching");
    document.documentElement.classList.remove("fixed");
}

searchIcon.addEventListener("click", showSearch);
searchClose.addEventListener("click", hideSearch);
shadowEl.addEventListener("click", hideSearch);