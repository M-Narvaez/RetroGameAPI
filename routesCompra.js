const express = require('express');
const routes = express.Router();

routes.get('/username/:username', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',error);

        connection.query('SELECT * FROM compra WHERE Username = ?', [req.params.username], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

routes.get('/estado/:value', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',error);

        connection.query('SELECT * FROM compra WHERE formaPago = ?', [req.params.value], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

routes.get('/:id', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',error);

        connection.query('SELECT * FROM compra WHERE Id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

routes.post('/', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',err);
        connection.query('CALL Agregra_compra(?,? , ?, ?, ?, ?); "', [req.body.Id, req.body.Username, req.body.codVideojuego, req.body.Cantidad, '26/17/2022', 'S'], (err, rows)=>{
            if(err) return res.send(err);

            res.send('OK!');
        });
    });
});

routes.delete('/:id', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',err);
        connection.query(' CALL Eliminar_item(?); ', [req.params.id], (err, rows)=>{
            if(err) return res.send(err);

            res.send('OK!');
        });
    });
});

routes.put('/:id', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',err);
        connection.query('UPDATE compra SET ? WHERE Id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err);

            res.send('OK!');
        });
    });
});

module.exports = routes;