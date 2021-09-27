//const employee = require('../models/employee');
const {response} = require("../services");
const {employee}  = require('../services')
const {isEmpty} = require('lodash')

class Employee {

    async create(req, res) {
        const body = req.body
        //if body is empty
        //validate

        if (isEmpty(body)) {
            return res.error('ssssssss')
        }

        const check = await employee.create(body)
        if(isEmpty(check._id)) {
            res.send(check)
        } else {
            res.error('check')
        }
    }

    async update(req, res) {
        const check = await employee.update({'email': 'olumuyiwa@initsng.com'},
               {$set: {'first_name': "Ayomide"}}
        )
        console.log(check.find())
        res.send(check)
    }

    async list(req, res) {
        try {
            const data = await employee.list();
            return response.sendSuccess(req, res, {message: 'Employee successfully called', data});
        } catch (e) {
            response.sendError(req, res, { error: e, status: 500 })
        }
    }

    async show(req, res){
        const check = await employee.show({
            "email" : "olumuyiwa@initsng.com"
        })
        res.send(check)
    }

}

module.exports = new Employee();
