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
const inputEl = header.querySelector(".search-wrap input");
const headerLists = [...header.querySelectorAll(".menu>li")];

const disappearLists = () => {
    headerLists.reverse().map((list, index) => {
        list.style.transitionDelay = index * .4 / headerLists.length + "s";
    })
}
const showSearch = () => {
    header.classList.add("searching");
    document.documentElement.classList.add("fixed");
    disappearLists();
    setTimeout(() => {
        inputEl.focus();
    }, 600)
}
const hideSearch = () => {
    header.classList.remove("searching");
    document.documentElement.classList.remove("fixed");
    disappearLists();
    inputEl.value = "";
}

searchIcon.addEventListener("click", showSearch);
searchClose.addEventListener("click", hideSearch);
shadowEl.addEventListener("click", hideSearch);


//Intersection Observer 화면과 교차점 알아보기 화면에 나오면 isIntersecting은 true 가 된다.
const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else if (!entry.isIntersecting) {
            entry.target.classList.remove("show");
        }
    })
})
//observe 함수로 하나씩 관찰 대상에 넣어주기
const infoEls = document.querySelectorAll(".infos .info");
infoEls.forEach(el => {
    io.observe(el)
})
