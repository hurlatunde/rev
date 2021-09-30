const mongoose = require('mongoose')
const Employee = require('./employee')
const Team = require('./team')

const connectDb = () => {
    return mongoose.connect('mongodb://localhost:27017/rev');

};

module.exports = {
    Employee, Team, connectDb
}
