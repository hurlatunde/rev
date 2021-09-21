const {employee, team} = require('../controllers')
const router = require('express').Router();

router.get('/v1/create', team.create);
router.get('/v1/update', team.update);

module.exports = router;
