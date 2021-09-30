const {employee, team} = require('../controllers')
const router = require('express').Router();

router.post('/v1/create', team.create);
router.post('/v1/update', team.update);
router.get('/v1/list', team.list);
router.get('/v1/show/:id', team.show);

module.exports = router;
