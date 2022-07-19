const express = require('express');
const mysql = require('mysql');
const myconnection = require('express-myconnection');

const routesCliente = require('./routesCliente');
const routesComentarios = require('./routesComentarios');
const routesVideojuego = require('./routesVideojuegos');
const routesCompra = require('./routesCompra');

const app = express();
app.set('port',process.env.port || 9000);
const dbOptions = {
    host:'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'retrogame'
}

//Middlewares ********************************************************
app.use(myconnection(mysql, dbOptions, 'single'));
app.use(express.json());


//Rutas **************************************************************
app.use('/comentarios', routesComentarios);
app.use('/cliente', routesCliente);
app.use('/videojuego', routesVideojuego);
app.use('/compra', routesCompra);

//Servidor corriendo **************************************************
app.listen(app.get('port'), ()=>{
    console.log("Servidor corriendo en el puerto ", app.get('port'));
});
