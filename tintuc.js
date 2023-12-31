
let selectedRating = 0;

function highlightStars(rating) {
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('highlighted');
    } else {
      star.classList.remove('highlighted');
    }
  });
}

function resetRating() {
  highlightStars(selectedRating);
}

function setRating(rating) {
  selectedRating = rating;
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('clicked');
    } else {
      star.classList.remove('clicked');
    }
  });
 
  console.log('Đã chọn đánh giá:', rating);
}
