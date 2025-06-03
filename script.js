const cards = document.querySelectorAll('.card');
const modal = document.getElementById('videoModal');
const iframe = document.getElementById('videoFrame');
const closeBtn = document.querySelector('.close');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const videoUrl = card.getAttribute('data-video');
        iframe.src = videoUrl;
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    iframe.src = '';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        iframe.src = '';
    }
});
