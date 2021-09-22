const {Staff}  = require('../services')


class Employee {

    create(req, res) {

        const staff = new Staff({
            'first_name': 'Olumuyiwa',
            'last_name': 'Akinyemi',
            'email': 'olumuyiwa@initsng.com'
        })
       const check = await staff.save()
        console.log(check);

        res.send('Hello World!')
    }
    update(req, res) {
        res.send('Hello World! update')
    }

}

module.exports = new Employee();
