// Carrossel automático com rolagem contínua (SEM PARAR)

function initAutoCarousel() {
    const carousel = document.getElementById('carrossel');
    if (!carousel) return;

   
    // Isso cria o efeito de loop infinito
  
    carousel.innerHTML += carousel.innerHTML;

    let scrollPosition = 0;
    const speed = 1; // controla a velocidade (quanto menor, mais suave)

    function animate() {
        scrollPosition += speed;

       
      
        // Quando chega na metade (fim original),
        // volta sem o usuário perceber
       
        if (scrollPosition >= carousel.scrollWidth / 2) {
            scrollPosition = 0;
        }

        carousel.scrollLeft = scrollPosition;

        // animação contínua (60fps)
        
        requestAnimationFrame(animate);
    }

    animate(); // iniciar animação

    //  pausa ao passar o mouse
   
    let isPaused = false;

    carousel.addEventListener('mouseenter', () => {
        isPaused = true;
    });

    carousel.addEventListener('mouseleave', () => {
        isPaused = false;
    });

    //  controle da pausa dentro da animação
    
    function animateWithPause() {
        if (!isPaused) {
            scrollPosition += speed;

            if (scrollPosition >= carousel.scrollWidth / 2) {
                scrollPosition = 0;
            }

            carousel.scrollLeft = scrollPosition;
        }

        requestAnimationFrame(animateWithPause);
    }

    // substitui a animação anterior
    animateWithPause();
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    initAutoCarousel();
});