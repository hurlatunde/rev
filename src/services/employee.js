const {Employee} = require('../models')

// const instanceEmployee = new Employee();

const create = async data => new Employee(data).save()
const list = async () => new Employee().find({})
const update = async data => new Employee().updateOne(data)
const show = async data => new Employee().where('email', 'olumuyiwa@initsng.com')
module.exports = {create, list, update, show}
