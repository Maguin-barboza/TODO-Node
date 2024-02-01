const express = require('express');
const router = express.Router()

const itemController = require('../controllers/item-controller');

router.get('/', itemController.get);

router.post('/', itemController.post);

module.exports = router;