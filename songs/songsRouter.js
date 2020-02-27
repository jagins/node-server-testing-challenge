const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>
{
    res.json({message: 'songs router'});
})

module.exports = router;