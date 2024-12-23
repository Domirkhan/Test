function addReview() {
    const reviewText = document.querySelector('textarea[name="review"]').value;
    let reviews = JSON.parse(localStorage.getItem('product_reviews')) || [];
    reviews.push(reviewText);
    localStorage.setItem('product_reviews', JSON.stringify(reviews));
    alert('Ваш отзыв добавлен!');
    location.reload(); // Перезагружаем страницу, чтобы показать новый отзыв
}
function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('product_reviews')) || [];
    const reviewsContainer = document.querySelector('.reviews');
    
    reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.textContent = review;
        reviewsContainer.appendChild(reviewItem);
    });
}

// Вызываем функцию при загрузке страницы
window.onload = loadReviews;
