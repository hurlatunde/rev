const {Team} = require('../models')

const instanceTeam = new Team();

const create = async data => new Team(data).save()
const list = async () => Team.find({})
const update = async data => Team.findOneAndUpdate(data)
const show = async data => Team.findById(data)

module.exports = {create, list, update, show}
