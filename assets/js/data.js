const API_URL = "http://localhost:9000";

const juegoDestacado = document.querySelector("#juegoDestacado");
const imagenDestacada = document.querySelector('#imagenDestacada');
const juegosDestacados = document.querySelector('#videojuegosDestacados')

fetch(`${API_URL}/videojuego/1202`)
    .then((response) => response.json())
    .then((videojuegos) => {
        const juegoD = videojuegos.map((juego) => `<h1 class="home__title">${juego.nombreVideojuego}</h1>
                                                    <p class="home__description">
                                                    Es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games.
                                                    </p>
                                                    <span class="home__price">$${juego.Valor}</span>`);
                        
                        const imagenD = videojuegos.map((juego) => `<img src="${juego.imagen}" alt="" class="home__img">`);

                        const callOfDuty = videojuegos.map((juego) => `<article class="featured__card">
                                                                        <span class="featured__tag">Venta</span>

                                                                        <img src="${juego.imagen}" alt="" class="featured__img">

                                                                        <div class="featured__data">
                                                                            <h3 class="featured__title">${juego.nombreVideojuego}</h3>
                                                                            <span class="featured__price">$${juego.Valor}</span>
                                                                        </div>

                                                                        <button class="button featured__button">AÑADIR AL CARRITO</button>
                                                                        </article>`);

        juegoDestacado.innerHTML = juegoD;
        imagenDestacada.innerHTML = imagenD;
        juegosDestacados.innerHTML = callOfDuty;
    });