const {employee} = require('../controllers')
const router = require('express').Router();

router.post('/v1/create', employee.create);
router.post('/v1/update', employee.update);
router.get('/v1/list', employee.list);
router.get('/v1/show/:id', employee.show);
router.post('/v1/login', employee.login)

module.exports = router;
