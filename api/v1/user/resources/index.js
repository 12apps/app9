var express = require('express');
var router = express.Router();
var resourceController = require('./resource.controller');

router.get('/', resourceController.index);

router.post('/', resourceController.create);

router.get('/:id', resourceController.read);

router.put('/:id', resourceController.update);

router.delete('/:id', resourceController.destroy);

module.exports = router;