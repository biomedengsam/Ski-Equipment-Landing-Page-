const review = document.getElementById('review');
review.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('h');
    const reviews = document.getElementById('products');
    reviews.scrollIntoView({ behavior: "smooth" });
})