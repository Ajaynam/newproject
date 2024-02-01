const express = require('express');
const router = express.Router();
const itemController = require('../controller/itemController');

router.get('/users', itemController.getAllUsers);
router.post('/users', itemController.createUser);
router.put('/users/:id', itemController.updateItem);
router.delete('/users/:id', itemController.deleteItem);
module.exports = router;
