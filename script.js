let currentImage = 0;
const images = [
    'images/service1.png',
    'images/service2.png',
    'images/service3.png',
    'images/service1.png'
];

function showImage(index) {
    const img = document.getElementById('gallery-img');
    img.src = images[index];
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('prev-btn').addEventListener('click', () => {
        currentImage = (currentImage - 1 + images.length) % images.length;
        showImage(currentImage);
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        currentImage = (currentImage + 1) % images.length;
        showImage(currentImage);
    });

    showImage(currentImage);
});


//   const track = document.querySelector('.slider-track');
//   const dots = document.querySelectorAll('.dot');
//   let currentIndex = 0;

//   function updateSlider() {
//     const width = document.querySelector('.slider').clientWidth;
//     track.style.transform = `translateX(-${currentIndex * width}px)`;
//     dots.forEach(dot => dot.classList.remove('active'));
//     dots[currentIndex].classList.add('active');
//   }

//   document.querySelector('.next').addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % 4;
//     updateSlider();
//   });

//   document.querySelector('.prev').addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + 4) % 4;
//     updateSlider();
//   });

//   window.addEventListener('resize', updateSlider);
const toTopBtn = document.getElementById("toTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

toTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});