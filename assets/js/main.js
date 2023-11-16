
let user = document.querySelector('.user');
document.querySelector('#user-icon').onclick = () =>{
   user.classList.toggle('active');
   search.classList.remove('active');
   navbar.classList.remove('active');    
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
}

const header = document.querySelector('header');

function handleScroll() {
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#1b0643'; 
    } else {
        header.style.backgroundColor = 'rgba(27, 6, 67, 0.2)';
    }
}

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2700,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('click', function () {
            const youtubeId = this.children[0].getAttribute('data-id');
            console.log(youtubeId);
            items.forEach(item => {
                item.querySelector('.youtube-icon').classList.remove('active');
            });
            this.querySelector('.youtube-icon').classList.add('active');

            const newUrl = `https://www.youtube.com/embed/${youtubeId}`;
            document.getElementById('video_id').src = newUrl;
        });
    });
});


const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
        const BASE_URL = 'https://api.themoviedb.org/3';
        const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
        const IMG_URL = 'https://image.tmdb.org/t/p/w300';
        function getMovies() {
            fetch(API_URL)
                .then(response => response.json())
                .then(data => showMovies(data.results))
                .catch(error => console.error('Error fetching data:', error));
        }

        function showMovies(movies) {
            const main = document.getElementById('movieList');
            main.innerHTML = '';
        
            movies.forEach(movie => {
                const { title, overview, poster_path } = movie;
                const movieEl = document.createElement('div');
                movieEl.classList.add('movie-card');
                movieEl.innerHTML = `
                    <div class="movie-poster">
                        <img src="${IMG_URL + poster_path}" alt="${title}">
                    </div>
                    <div class="movie-details">
                        <h3 class="movie-title">${title}</h3>
                        <p class="movie-description">${overview}</p>
                        <a href="#" class="watch-Q">Ver Ahora</a>
                    </div>
                `;
        
                main.appendChild(movieEl);
            });
        }
        getMovies();