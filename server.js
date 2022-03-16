let express = require('express');

let app = express();

let users = [
    {
        id: 1,
        username: 'Vova'
    },
    {
        id: 2,
        username: 'Nicita'
    },
    {
        id: 3,
        username: 'Svetlana'
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

app.listen(3012, function () {
    console.log('API app started');
})