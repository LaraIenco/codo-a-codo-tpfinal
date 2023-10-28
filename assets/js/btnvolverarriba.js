        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
        }

        // Mostrar u ocultar el botón de volver arriba
        window.addEventListener('scroll', () => {
            const scrollButton = document.getElementById('scroll-to-top');
            if (document.documentElement.scrollTop > 300) {
                scrollButton.style.display = 'block';
            } else {
                scrollButton.style.display = 'none';
            }
        });
        