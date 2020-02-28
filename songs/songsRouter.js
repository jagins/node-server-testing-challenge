const express = require('express');

const Songs = require('./songs-model');

const router = express.Router();

router.get('/', (req, res) =>
{
    Songs.getAllSongs()
    .then(songs =>
    {
        res.status(200).json(songs);
    })
    .catch(error =>
    {
        res.status(500).json({error: 'There was an error getting songs'});
    })
})

router.post('/', (req, res) =>
{
    const song = req.body
    if(!song.title && !song.artist && !song.album)
    {
        res.status(400).json({message: 'Please include the title, artist and album of the song'});
    }
    else
    {
        Songs.addSong(song)
        .then(song =>
        {
            res.status(201).json(song);
        })
        .catch(error =>
        {
            res.status(500).json({error: 'There was an error saving to the database'});
        })
    }
})

router.delete('/:id', (req, res) =>
{
    const id = req.params.id;

    Songs.deleteSong(id)
    .then(songs =>
    {
        res.status(200).json(songs);
    })
    .catch(error =>
    {
        res.status(500).json({error: 'There was an error deleting from the database'});
    })
})

module.exports = router;