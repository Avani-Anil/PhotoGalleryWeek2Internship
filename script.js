const gridItems = document.querySelectorAll('.grid-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');

// Open the lightbox and display the clicked image
gridItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        lightboxImage.src = item.querySelector('img').src;
        lightbox.style.display = 'block';
    });
});

// Close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
