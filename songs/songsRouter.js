const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>
{
    res.json({message: 'songs router'});
})

router.post('/', (req, res) =>
{

})

router.delete('/', (req, res) =>
{
    
})

module.exports = router;