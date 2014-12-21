var express = require('express');
var router = express.Router();
var userController = require('./user.controller');
var resourceApi = require('./resources');

function passPrimaryParams(req, res, next) {
   req.primaryParams = req.params.user_id;
   next();
}

router.use('/:user_id/resources', passPrimaryParams, resourceApi);

router.get('/', userController.index);

router.post('/', userController.create);

router.get('/:id', userController.read);

router.put('/:id', userController.update);

router.delete('/:id', userController.destroy);

module.exports = router;