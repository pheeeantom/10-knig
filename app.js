const express = require('express');
const app = express();
const port = 3020;

const data = [
    {
        "id": 1,
        "name": "Библия",
        "author": "Несколько десятков святых",
        "cites": [
            "Просите, и дано будет вам; ищите, и найдете; стучите, и отворят вам;",
            "И сотворил Бог человека по образу Своему, по образу Божию сотворил его; мужчину и женщину сотворил их.",
            "Итак во всем, как хотите, чтобы с вами поступали люди, так поступайте и вы с ними, ибо в этом закон и пророки."
        ],
        "pages": 2309,
        "year": "-XV по I",
        "theme": "Христианство",
        "picture": "jesus.webp",
    },
    {
        "id": 2,
        "name": "О войне",
        "author": "Карл фон Клаузевиц",
        "cites": [],
        "pages": 317,
        "year": "1832",
        "theme": "Военное дело",
        "picture": "war.jpg",
    }
];

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
});

app.get('/api/items', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});