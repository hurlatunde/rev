const {employee} = require('../controllers')
const router = require('express').Router();

router.get('/v1/create', employee.create);
router.get('/v1/update', employee.update);

module.exports = router;
