const {employee}  = require('../services')


class Employee {

    async create(req, res) {

        const check = await employee.create({
            'first_name': 'Olumuyiwa',
            'last_name': 'Akinyemi',
            'email': 'olumuyiwa@initsng.com'
        })
        console.log(check);

        res.send('Hello World!')
    }
    update(req, res) {
        res.send('Hello World! update')
    }

    async list(req, res) {
        const check = await employee.list();
        console.log(check);

        res.send('Hello World! update')
    }

}

module.exports = new Employee();
