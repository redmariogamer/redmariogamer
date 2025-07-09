document.addEventListener("DOMContentLoaded", function() {
    const images = ['Slideshow_images/image1.jpg','Slideshow_images/image2.jpg','Slideshow_images/image3.jpeg','Slideshow_images/image4.jpg','Slideshow_images/image5.jpg','Slideshow_images/image6.jpg'];
    let currentIndex = 0;

    const previousBtn = document.getElementById('previousBtn');
    const nextBtn = document.getElementById('nextBtn');

    const image = document.getElementById('image');

    previousBtn.addEventListener('click', () =>{
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        image.src = images[currentIndex];
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        image.src = images[currentIndex];
    });
})