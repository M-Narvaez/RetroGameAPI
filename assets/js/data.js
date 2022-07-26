const API_URL = "http://localhost:9000";

const juegoDestacado = document.querySelector("#juegoDestacado");
const imagenDestacada = document.querySelector('#imagenDestacada');
const juegosDestacados = document.querySelector('#videojuegosDestacados');
const listaVideojuegos = document.querySelector('#videojuegos');
const listaCarrito = document.querySelector('#carritoCompras');
const infoTotalCarrito = document.querySelector('#infoTotal');
const historialCompra = document.querySelector('#historialCompra');

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

                <button class="button featured__button" onclick="añadirAlCarrito(${juego.codVideojuego})" >AÑADIR AL CARRITO</button>
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
            <i class="bx bx-shopping-bag"></i>
        </button>
        </article>`);

        listaVideojuegos.innerHTML = allGames;
    });


fetch(`${API_URL}/compra/estado/S`)
    .then((response) => response.json())
    .then((juegos) => {
        let listaJuegos = "";
        let nElementos = juegos.length;
        let precioTotal = 0;
        juegos.forEach(element => {
            fetch(`${API_URL}/videojuego/${element.codVideojuego}`)
            .then((juego) => juego.json())
            .then((res) => {
                res.map((data) => precioTotal += data.Valor);
                listaJuegos += res.map((item) => `<article class="cart__card">
                <div class="cart__box">
                    <img src="/${item.imagen}" alt="" class="cart__img">
                </div>
        
                <div class="cart__details">
                    <h3 class="cart__title">${item.nombreVideojuego}</h3>
                    <span class="cart__price">$${item.Valor}</span>
        
                    <div class="cart__amount">
                        <div class="cart__amount-content">
                            <span class="cart__amount-box">
                                <i class='bx bx-minus' ></i>
                            </span>
        
                            <span class="cart__amount-number">1</span>
        
                            <span class="cart__amount-box">
                                <i class='bx bx-plus' ></i>
                            </span>
                        </div>
        
                        <i class='bx bx-trash-alt cart__amount-trash' onclick="borrarDelCarrito(${element.Id})" ></i>
                    </div>
                </div>
            </article>`);
            listaCarrito.innerHTML = listaJuegos;
            const infoTotal = `<span class="cart__prices-item">${nElementos} Elementos</span>
                                <span class="cart__prices-total">$${precioTotal}</span>`;

            infoTotalCarrito.innerHTML = infoTotal;
        });
    });
    });


    fetch(`${API_URL}/compra/estado/N`)
    .then((response) => response.json())
    .then((juegos) => {
        let listaJuegos = "";
        juegos.forEach(element => {
            fetch(`${API_URL}/videojuego/${element.codVideojuego}`)
            .then((juego) => juego.json())
            .then((res) => {
                listaJuegos += res.map((item) => `<article class="products__card">
                <img src="/${item.imagen}" alt="" class="products__img">
        
                <h3 class="products__title">${item.nombreVideojuego}</h3>
                <span class="products__price">$${item.Valor}</span>
                </article>`);

            historialCompra.innerHTML = listaJuegos;
        });
    });
});


    function borrarDelCarrito(id) {
    fetch(`${API_URL}/compra/${id}`, {method: 'DELETE'});

    location.reload();
    }


function añadirAlCarrito(codigo) {

    let data = [{
        Username: "Luis",
        codVideojuego: codigo,
        Cantidad: 1,
        fechaCompra: new Date(),
        formaPago: "S"
    }]
    console.log(data.json());
    fetch(`${API_URL}/compra`, {method: 'POST', body: data})
}