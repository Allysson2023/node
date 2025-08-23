module.exports = app=>{

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

    app.post('/users', (req, res)=>{

        res.json(req.body);
    });
    
};