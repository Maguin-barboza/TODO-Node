const express = require('express');
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(201).send({
        title: 'TODO API',
        version: '0.0.2'
    });
});

module.exports = router;