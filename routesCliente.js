const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',error);

        connection.query('SELECT * FROM cliente', (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

routes.get('/:id', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',error);

        connection.query('SELECT * FROM cliente WHERE Username = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

routes.post('/', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',err);
        connection.query('CALL  Add_usuario(?, ?, ?);', [req.body.Username, req.body.Email, req.body.Contraseña], (err, rows)=>{
            if(err) return res.send(err);

            res.send('OK!');
        });
    });
});

routes.delete('/:id', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',err);
        connection.query('DELETE FROM cliente WHERE Username = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err);

            res.send('OK!');
        });
    });
});

routes.put('/:id', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',err);
        connection.query('UPDATE cliente SET ? WHERE Username = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err);

            res.send('OK!');
        });
    });
});

module.exports = routes;