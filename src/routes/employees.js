const {employee} = require('../controllers')
const router = require('express').Router();

router.get('/v1/create', employee.create);
router.get('/v1/update', employee.update);
router.get('/v1/list', employee.list);

module.exports = router;
