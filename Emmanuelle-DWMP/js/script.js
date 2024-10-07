document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = Array.from(carouselTrack.children);
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    let currentIndex = 0;

    const updateCarousel = (index) => {
        const slideWidth = slides[index].getBoundingClientRect().width;
        carouselTrack.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
    };

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel(currentIndex);
    });

    // Animação nas cartas
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transition = 'transform 0.2s';
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Validação do formulário
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome && email && mensagem) {
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
