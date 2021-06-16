// Smooth scroll to reviews in bigger screen sizes when clicked
const review = document.getElementById('review');
review.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('h');
    const reviews = document.getElementById('products');
    reviews.scrollIntoView({ behavior: "smooth" });
})

// Smooth scroll to reviews in bigger screen sizes when clicked
const review2 = document.getElementById('review2');
review2.addEventListener('click', function (e) {
    e.preventDefault();
    const reviews = document.getElementById('products');
    reviews.scrollIntoView({ behavior: "smooth" });
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
        // const home = document.querySelector(".home");
        // home.style.setProperty("display", "none");
        const home1 = document.querySelector(".home1");
        home1.style.setProperty("display", "flex");
        const nav = document.getElementById("nav");
        nav.style.setProperty("display", "contents");
        // const menu1 = document.querySelector(".menu1");
        // menu1.style.setProperty("display", "block");

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

// Closing the menu
// const fa_close = document.querySelector(".fa-times");
// fa_close.addEventListener('click', function (e) {
//     e.preventDefault();



// })