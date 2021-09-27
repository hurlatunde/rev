//const employee = require('../models/employee');
const {employee}  = require('../services')


class Employee {

    async create(req, res) {

        const check = await employee.create({
            'first_name': 'Olumuyiwa',
            'last_name': 'Akinyemi',
            'email': 'olumuyiwa@initsng.com'
        })
        console.log(check);

        res.send(check)
    }

    async update(req, res) {
        const check = await employee.update({'email': 'olumuyiwa@initsng.com'},
               {$set: {'first_name': "Ayomide"}}
        )
        console.log(check)
        res.send(check)
    }

    async list(req, res) {
        const check = await employee.list();
        console.log(check);

        res.send(check)
    }

    async show(req, res){
        const check = await employee.show({
            "email" : "olumuyiwa@initsng.com"
        })
        res.send(check)
    }

}

module.exports = new Employee();
