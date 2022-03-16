let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let users = [
    {
        id: 1,
        name: 'Vova'
    },
    {
        id: 2,
        name: 'Nicita'
    },
    {
        id: 3,
        name: 'Svetlana'
    }
];

app.get('/', function (req, res) {
    res.send('Hello API');
})

app.get('/users', function (req, res) {
    res.send(users);
})

app.get('/users/:id', function (req, res) {
    console.log(req.params);
    let user = users.find(function (user) {
        return user.id === Number(req.params.id);
    });
    res.send(user);
})

app.post('/users', function (req, res) {
    console.log(req.body);
    let user = {
        id: Date.now(),
        name: req.body.name
    };
    users.push(user);
    res.send(user);
})

app.put('/users/:id', function (req, res) {
    let user = users.find(function (user) {
        return user.id === Number(req.params.id);
    });
    user.name = req.body.name;
    res.sendStatus(200);
})

app.delete('/users/:id', function (req, res) {
    users = users.filter(function (user) {
        return user.id !== Number(req.params.id);
    });
    res.sendStatus(200);
})

app.listen(3012, function () {
    console.log('API app started');
})