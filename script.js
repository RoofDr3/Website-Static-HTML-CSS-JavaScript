// Toggle class active hamburger menu
const navbarNav = document.querySelector('.detail-nav');

// klik hamburger menu
document.querySelector('#hm-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hm-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.contains)) {
        navbarNav.classList.remove('active');
    }
})

// scroll popular
let scrollContainer = document.querySelector('.gallery');
let backbtn = document.getElementById('btnback');
let nextbtn = document.getElementById('btnnext');

scrollContainer.addEventListener('wheel', (e) => {
    scrollContainer.scrollLeft += e.deltaY;
});

nextbtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 1700;
});

backbtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 1700;
})

//Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

