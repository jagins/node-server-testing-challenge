const database = require('../database/db-config');

function addSong(song)
{
    return database('songs').insert(song, 'id')
    .then(ids =>
    {
        const [id] = ids;
        return findSongById(id);
    })
}

function findSongById(id)
{
    return database('songs').where({id}).first();
}

function getAllSongs()
{
    return database('songs');
}

function deleteSong(id)
{
    return database('songs').where({id}).del()
    .then(deleted =>
    {
        return getAllSongs();
    })
}

module.exports = {
    addSong,
    findSongById,
    getAllSongs,
    deleteSong
}