const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    'first_name' : String,
    'last_name' : String,
    'email' : String
})

module.exports =  mongoose.model('employee', EmployeeSchema);
