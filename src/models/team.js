const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({
    
    'name' : String,
    'description' : String,
    'employees': {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee"
    },
    'created_at' :{ type: Date, default: Date.now },
    'updated_at': { type: Date, default: Date.now },
})

module.exports =  mongoose.model('Team', TeamSchema);