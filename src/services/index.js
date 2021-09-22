const mongoose = require(mongoose)
const staff = require('./staff')

(async () => {
    // database connection
    await mongoose.connect('mongodb://localhost:27017/test')
})()

module.exports = {
    staff
}