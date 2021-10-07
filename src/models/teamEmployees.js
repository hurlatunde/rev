const mongoose = require('mongoose')

const TeamEmployeeSchema = new mongoose.Schema({
    'id' : Number,
    'team': {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    },
    'employee': {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee"
    },
    'lead' : String
})

module.exports =  mongoose.model('team_employee', TeamEmployeeSchema);