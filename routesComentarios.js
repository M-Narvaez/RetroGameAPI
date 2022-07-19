const express = require('express');
const routes = express.Router();

routes.get('/:username', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',error);

        connection.query('SELECT * FROM comentarios WHERE Username = ?', [req.params.username], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

routes.get('/id/:id', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',error);

        connection.query('SELECT * FROM comentarios WHERE Id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

routes.post('/', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',err);
        connection.query('INSERT INTO comentarios set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('OK!');
        });
    });
});

routes.delete('/:id', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',err);
        connection.query('DELETE FROM comentarios WHERE Id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err);

            res.send('OK!');
        });
    });
});

routes.put('/:id', (req, res)=>{
    req.getConnection((error, connection)=>{
        if (error) return res.send('Hubo un Error: ',err);
        connection.query('UPDATE comentarios SET ? WHERE Id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err);

            res.send('OK!');
        });
    });
});

module.exports = routes;