// JavaScript code to make the page more attractive

// Image slideshow for the hero section
const heroImages = [
    'http://360_F_344673825_6fU6IORyipkYpfU1mg2vmxtHxDToUO6Q.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWhpGlLo1sHEqFM2GcYZmv_mL3WYJnjgz-zSAXTqC_A0tiR6kDCirg3ki9ttrJ8mooqQ&usqp=CAU',
    'image3.jpg',
]; // Replace with your image URLs
let currentImageIndex = 0;
const hero = document.querySelector('.hero');

function changeHeroImage() {
    hero.style.backgroundImage = `url(${heroImages[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
}

setInterval(changeHeroImage, 5000); // Change image every 5 seconds


