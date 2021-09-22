const mongoose = require('mongoose')

const StaffSchema = new mongoose.Schema({
    'first_name' : String,
    'last_name' : String,
    'email' : String
})

module.exports =  mongoose.model('staff', StaffSchema);
