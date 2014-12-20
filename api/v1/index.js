var express = require('express');
var router = express.Router();
var userApi = require('./user');
var resourceController = require('./user/resources/resource.controller');

router.get('/feed', resourceController.feed);
router.use('/user', userApi);

module.exports = router;