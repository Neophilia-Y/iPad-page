import ipads from "../data/ipads.js";

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

// let x = 0, y = 0;
// let position = ""
// for (let i = 0; i < 60; i++) {
//     position = `background-position: ${x}px ${y}px`;
//     if (x >= 600) {
//         x = 0
//         y += 100
//         continue;
//     }
//     x += 100
// }

// 비디오 재생!
const video = document.querySelector('.stage video')
const playBtn = document.querySelector('.stage .controller--play')
const pauseBtn = document.querySelector('.stage .controller--pause')

// Google 자동 재생 정책 확인! - https://developer.chrome.com/blog/autoplay/#audiovideo-elements
// video.play()
//   .then(played)
//   .catch(paused)

playBtn.addEventListener('click', () => {
    video.play()
    playBtn.classList.add('hide')
    pauseBtn.classList.remove('hide')
})
pauseBtn.addEventListener('click', () => {
    video.pause()
    playBtn.classList.remove('hide')
    pauseBtn.classList.add('hide')
})

// Price section data
const priceContainer = document.querySelector(".price .price-list");
let priceItems = "";
ipads.forEach((item) => {
    let colors = "";
    item.colors.forEach((color) => {
        colors += `<div class="color" style="background-color:${color}"></div>`
    })
    priceItems += `
        <li class="price-item">
            <img src=${item.thumbnail} />
            <div class="colors"> 
                ${colors}
            </div>
            <h2>${item.name}</h2>
            <p>${item.tagline}</p>
            <div class="amount">₩${item.price.toLocaleString("en-US")}</div>
            <a class="link href="${item.url}" target="_blank">More</a>
            <hr/>
        </li >

    `;
})
priceContainer.innerHTML = priceItems;

