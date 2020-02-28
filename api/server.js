const express = require('express');
const helmet = require('helmet');

const songsRouter = require('../songs/songsRouter');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/songs', songsRouter);

server.get('/', (req, res) =>
{
    res.json({api: 'up'});
})

module.exports = server;