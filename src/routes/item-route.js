const express = require('express');
const router = express.Router()

const itemController = require('../controllers/item-controller');

router.get('/', itemController.get);
router.get('/:id', itemController.getById)
router.post('/', itemController.post);
router.put('/markItemDone/:id', itemController.put);

module.exports = router;