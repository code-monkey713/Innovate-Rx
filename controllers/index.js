const router = require('express').Router();
// const { A, B } = require('../models');

// router.get('/', (req, res) => res.send('Hello World!'));

// module.exports = router;


const apiRoutes = require('./api');
const homeRoutes = require('./home_routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
