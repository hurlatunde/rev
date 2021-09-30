const {employees} = require('./employees')
const {teams} = require('./teams')
const router = require('express').Router();

router.route('/employee', employees)

module.exports = {router}