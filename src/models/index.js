const mongoose = require('mongoose')
const Employee = require('./employee')

const connectDb = () => {
    return mongoose.connect('mongodb://localhost:27017/rev');

};

module.exports = {
    Employee, connectDb
}
