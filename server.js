const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log('test with local host 3000 ');
});

 app.get('/manager', (req, res) => {
    res.json(budget);
 });

//  app.listen(port, () => {
//     console.log('Example app listening at http://localhost:3000');
//  });
