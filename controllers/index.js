const router = require('express').Router();
const { A, B } = require('../models');

router.get('/', (req, res) => res.send('Hello World!'));

module.exports = router;
