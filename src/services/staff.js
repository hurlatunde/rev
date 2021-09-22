const {Employee} = require('../models')

// const instanceEmployee = new Employee();

const create = async data => new Employee(data).save()
const list = async () => new Employee().find().all('staff')

module.exports = {create, list}
