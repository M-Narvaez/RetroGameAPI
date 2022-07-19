const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',error);

        connection.query('SELECT * FROM videojuegos ', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

routes.get('/:id', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',error);

        connection.query('SELECT * FROM videojuegos WHERE codVideojuego = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

routes.post('/', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',err);
        connection.query('INSERT INTO videojuegos set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('OK!');
        });
    });
});

routes.delete('/:id', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',err);
        connection.query('DELETE FROM videojuegos WHERE codVideojuego = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err);

            res.send('OK!');
        });
    });
});

routes.put('/:id', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',err);
        connection.query('UPDATE videojuegos SET ? WHERE codVideojuego = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err);

            res.send('OK!');
        });
    });
});

module.exports = routes;