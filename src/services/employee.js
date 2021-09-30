const {Employee} = require('../models')

const instanceEmployee = new Employee();

const create = async data => new Employee(data).save()
const list = async () => Employee.find({})
const update = async data => Employee.findOneAndUpdate(data)
const show = async data => Employee.findById(data)
const checkEmmployeeEmai = async (email) => Employee.findOne({email})
module.exports = {create, list, update, show, checkEmmployeeEmai}
