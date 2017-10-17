const express = require('express');
const app = express();
const fdb = require('./src/fake_db');

if (process.env.NODE_ENV != 'production') {
    app.use('/bundle.js', require('http-proxy-middleware')({
        target: 'http://localhost:8081'
    }));
}

app.use(express.static('./public'));


app.get('/api/name/:name', (req, res) => {
    fdb.findByName([req.params.name], function(err, data){
        console.log(data);
        res.json(data);
    });
});

app.get('/api/nameUrl/:nameUrl', (req, res) => {
    fdb.findByNameUrl([req.params.nameUrl], function(err, data){
        // if (!data.length) {
        //     res.status(404).send('Error: Product not found!');
        //     console.log('no result');
        // } else {
        console.log(data);
        res.json(data);
        // }
    });
})

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, () => console.log(`I'm listening.`));
