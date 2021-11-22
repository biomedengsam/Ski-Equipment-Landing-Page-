// Smooth scroll to reviews in bigger screen sizes when clicked
const review = document.getElementById('review');
review.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('h');
    const reviews = document.getElementById('products');
    reviews.scrollIntoView({ behavior: "smooth" });
})

// Smooth scroll to reviews in small screen sizes when clicked
const review2 = document.getElementById('review2');
review2.addEventListener('click', function (e) {
    e.preventDefault();
    const reviews = document.getElementById('products');
    reviews.scrollIntoView({ behavior: "smooth" });
})

// Smooth scroll to products in bigger screen sizes when clicked
const products = document.getElementById('nav-products');
products.addEventListener('click', function (e) {
    e.preventDefault();
    const product = document.getElementById('featured-products');
    product.scrollIntoView({ behavior: "smooth" });
})

// Smooth scroll to products in small screen sizes when clicked
const products1 = document.getElementById('nav-products1');
products1.addEventListener('click', function (e) {
    e.preventDefault();
    const product1 = document.getElementById('featured-products');
    product1.scrollIntoView({ behavior: "smooth" });
})

// Smooth scroll to homepage in big and small screen sizes when home nav is clicked 
// For big size screen
const home = document.getElementById('home');
//For small size screens
const home1 = document.getElementById('home1');
// Click event on home nav
home.addEventListener('click', function (e) {
    e.preventDefault();
    const homepage = document.getElementById('homepage');
    homepage.scrollIntoView({ behavior: "smooth" });
})

home1.addEventListener('click', function (e) {
    e.preventDefault();
    const homepage = document.getElementById('homepage');
    homepage.scrollIntoView({ behavior: "smooth" });
})
// Display menu when burger icon when clicked 
const burger = document.getElementById('burger');
burger.addEventListener('click', function (e) {
    e.preventDefault();
    if (burger.classList.contains('fa-times')) {
        console.log('fa - times there');
        burger.classList.remove('fa-times');
        burger.classList.add('fa-bars');
        const home1 = document.querySelector(".home1");
        home1.style.setProperty("display", "none");
        const hr = document.querySelector(".hr");
        hr.style.setProperty("display", "none");
    }
    else if (burger.classList.contains('fa-bars')) {
        console.log('fa - bars there');
        burger.classList.remove('fa-bars');
        burger.classList.add('fa-times');

        const hr = document.querySelector(".hr");
        hr.style.setProperty("display", "block");
        const home1 = document.querySelector(".home1");
        home1.style.setProperty("display", "flex");
        const nav = document.getElementById("nav");
        nav.style.setProperty("display", "contents");
    }
})

window.addEventListener('resize',
    function resize() {
        const window_width = window.innerWidth;
        console.log(window_width);
        if (window_width > 767) {
            const home1 = document.querySelector(".home1");
            home1.style.setProperty("display", "none");
            const hr = document.querySelector(".hr");
            hr.style.setProperty("display", "none");
            const nav = document.getElementById("nav");
            nav.style.setProperty("display", "flex");
            burger.classList.remove('fa-times');
            burger.classList.add('fa-bars');
        }

    })