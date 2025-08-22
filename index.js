const express = require('express');

let app = express();

app.get('/', (req, res)=>{

    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    res.end('<h2> Olá </h2>');
});

app.get('/users', (req, res)=>{

    res.statusCode = 200;
    res.setHeader('content-Type', 'application/json');
    res.json({
        users:[{
            name:'Hcode',
            email:'contato@hcode.com',
            id:1
        }]
    });

});


app.listen(3000, '127.0.0.1', ()=>{

    console.log('Servidor rodando!!!');
    
});
