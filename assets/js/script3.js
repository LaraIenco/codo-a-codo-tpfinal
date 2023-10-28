
// Comienzo de Slider principal
const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider__img');
const nextBtn = document.querySelector('.slider__btn--right');
const prevBtn = document.querySelector('.slider__btn--left');

let currentIndex = 0;

// Con esto, cambio a la siguiente img
function changeSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

// Con esto muestro la siguiente img (current image + 1)
function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    changeSlide(currentIndex);
}

// Con esto muestro la anterior img (current image - 1)
function prevSlide() {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    changeSlide(currentIndex);
}

// Ahora, conecto los eventos de arriba con los botones (siguiente y anterior)
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Temporizados para que el slider sea automatico
let autoSlideInterval = setInterval(nextSlide, 4000);

// Se detiene lo automatico
nextBtn.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 4000);
});

prevBtn.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 4000);
});
// Fin de Slider principal

//Comienzo de Slider Categorias

const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const sliderCat = document.querySelector(".slider-cat");
let currentIndexCat = 0;

leftBtn.addEventListener("click", () => {
    const maxIndexCat = sliderCat.children.length - 4;
    if (currentIndexCat > 0) {
        currentIndexCat--;
    } else {
        currentIndexCat = maxIndexCat;
    }
    updateCategorySlider();
});

rightBtn.addEventListener("click", () => {
    const maxIndexCat = sliderCat.children.length - 4; //Ajusto hasta que no haya nada en blanco, por eso el -4
    if (currentIndexCat < maxIndexCat) {
        currentIndexCat++;
    } else {
        currentIndexCat = 0;
    }
    updateCategorySlider();
});

function updateCategorySlider() {
    const itemWidthCat = sliderCat.children[0].clientWidth;
    sliderCat.style.transform = `translateX(-${currentIndexCat * itemWidthCat}px)`;
}
//Fin Slider Categorias

// Simulador de Carrito

function mostrarAlerta() {
    alert("El producto ha sido añadido al carrito.");
}

