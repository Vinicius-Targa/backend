const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const {setupWebsocket} = require('./websocket');
const routes = require('./routes');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@devdatabase.eznd5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());

app.use(express.json());

app.use(routes);

server.listen(3333);