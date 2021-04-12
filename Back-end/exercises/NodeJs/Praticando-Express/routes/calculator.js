const express = require('express');
const router = express.Router();
const middlewares = require('../middlewares');

router.get(
    '/:operacao/:numero1/:numero2',
    middlewares.sum,
    middlewares.divide,
    middlewares.multiply,
    middlewares.subtract)

module.exports = router;