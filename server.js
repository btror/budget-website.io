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

const budget = {
    myBudget: [
        {
            title: 'Eat Out',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 375
        },
        {
            title: 'Grocery',
            budget: 110
        },
        {
            title: 'Entertainment',
            budget: 55
        },
        {
            title: 'Gas',
            budget: 150
        },
        {
            title: 'House Repairs',
            budget: 300
        },
        {
            title: 'Alimony',
            budget: 500
        },
    ]
};


 app.get('/manager', (req, res) => {
    // const data = require('./budget');
    // res.json(data);
    res.json(budget);
 });

//  app.listen(port, () => {
//     console.log('Example app listening at http://localhost:3000');
//  });