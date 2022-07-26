const API_URL = "http://localhost:9000";

const juegoDestacado = document.querySelector("#juegoDestacado");
const imagenDestacada = document.querySelector('#imagenDestacada');
const juegosDestacados = document.querySelector('#videojuegosDestacados');
const listaVideojuegos = document.querySelector('#videojuegos')

fetch(`${API_URL}/videojuego/1202`)
    .then((response) => response.json())
    .then((videojuegos) => {
        const juegoD = videojuegos.map((juego) => `<h1 class="home__title">${juego.nombreVideojuego}</h1>
                                                    <p class="home__description">
                                                    Es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games.
                                                    </p>
                                                    <span class="home__price">$${juego.Valor}</span>`);
                        
                        const imagenD = videojuegos.map((juego) => `<img src="${juego.imagen}" alt="" class="home__img">`);

        juegoDestacado.innerHTML = juegoD;
        imagenDestacada.innerHTML = imagenD;
    });

fetch(`${API_URL}/videojuego/destacados`)
    .then((response) => response.json())
    .then((videojuegos) => {
        const jDestacados = videojuegos.map((juego) => `<article class="featured__card">
        <span class="featured__tag">Venta</span>

        <img src="${juego.imagen}" alt="" class="featured__img">

        <div class="featured__data">
            <h3 class="featured__title">${juego.nombreVideojuego}</h3>
            <span class="featured__price">$${juego.Valor}</span>
        </div>

        <button class="button featured__button">AÑADIR AL CARRITO</button>
        </article>`);

        juegosDestacados.innerHTML = jDestacados;
    });


fetch(`${API_URL}/videojuego`)
    .then((response) => response.json())
    .then((juegos) => {
        const allGames = juegos.map((juego) => `<article class="products__card">
        <img src="/${juego.imagen}" alt="" class="products__img">

        <h3 class="products__title">${juego.nombreVideojuego}</h3>
        <span class="products__price">$${juego.Valor}</span>

        <button class="products__button">
            <i class='bx bx-shopping-bag'></i>
        </button>
        </article>`);

        listaVideojuegos.innerHTML = allGames;
    });