const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    'first_name' : String,
    'last_name' : String,
    'email' : String,
    'password': String,
    'team': {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    },
    'created_at' :{ type: Date, default: Date.now },
    'updated_at': { type: Date, default: Date.now },
})

module.exports =  mongoose.model('Employee', EmployeeSchema);
