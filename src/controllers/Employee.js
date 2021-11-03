const jwt = require('jsonwebtoken')
const {response} = require("../services");
const {employee}  = require('../services')
const {employeeValidate} = require('../utilites/validation')
const {isEmpty, remove, unset, filter} = require('lodash')
const passwordHash = require('password-hash')
const bcrypt = require('bcryptjs')
// const config = require(__dirname, "../../config.json")
const {port,tokenLife, refreshTokenLife, refreshTokenSecret} = require('../../config.json')

class Employee {

    async create(req, res) {
        const body = req.body

        const { error, value, message } = await employeeValidate.create(body)
        if(error){
            return response.sendError(req, res, {"message": message, status : 500})
        }

        try {
            let data = {
                'first_name': body.first_name,
                'last_name': body.last_name,
                'email': body.email,
                'password': bcrypt.hashSync(body.password, bcrypt.genSaltSync(10))
            }

            const check = await employee.create(data)
            if (check) { 
                let employee = {}
                employee.first_name = data.first_name,
                employee.last_name = data.last_name
                employee.email = data.email

                let token =  jwt.sign(employee, refreshTokenSecret, {expiresIn: refreshTokenLife});
                return response.sendSuccess(req, res, {message: 'Employee returned', data:{employee:employee, token :token } });

                // return response.sendSuccess(req, res, {message: "Employee created successfully", data: check});
            } else {
                return response.sendError(req, res);
            }
        } catch (e) {
            response.sendError(req, res, {error: e, status: 500})
        }
    }

    async update(req, res) {
        const body = req.body

        if (isEmpty(body)) {
            return response.sendError(req, res, {error: "Request is empty", status: 500})
        }

        try {
            const check = await employee.update(body)
            if (isEmpty(check._id)) {
                return response.sendSuccess(req, res, {message: "Employee updated successfully", data: check});
            } else {
                return response.sendError(req, res);
            }
        } catch (e) {
            response.sendError(req, res, {error: e, status: 500})
        }
    }

    async list(req, res) {
        try {
            const data = await employee.list();
            return response.sendSuccess(req, res, {message: 'Employee successfully called', data});
        } catch (e) {
            response.sendError(req, res, {error: e, status: 500})
        }
    }

    async show(req, res) {
        try {
            const data = await employee.show(req.params.id);

            return response.sendSuccess(req, res, {message: 'Employee returned', data: data});

            // return response.sendSuccess(req, res, {message: 'Employee successfully called', data});
        } catch (e) {
            response.sendError(req, res, {error: e, status: 500})
        }

        const check = await employee.show({
            "email": "olumuyiwa@initsng.com"
        })
        res.send(check)
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async login(req, res) {
        const body = req.body

        const { error, value, message } = await employeeValidate.login(body)
        if(error){
            return response.sendError(req, res, {"message": message, status : 500})
        }

        try{ 
            const data = await employee.checkEmployeeEmail(body.email);

            if(bcrypt.compareSync(body.password, data.password)) {

                let employee = {}
                employee.first_name = data.first_name,
                employee.last_name = data.last_name
                employee.email = data.email

                let token =  jwt.sign(employee, refreshTokenSecret, {expiresIn: refreshTokenLife});
                // let token =  jwt.sign({...data}, refreshTokenSecret, {expiresIn: refreshTokenLife});
                return response.sendSuccess(req, res, {message: 'Employee returned', data:{employee:employee, token :token } });
            }
        } catch (e) {
            response.sendError(req, res, {error: e, status: 500})
        }
    }

    async remove(values) {
        let arr = []
        values.forEach((element, index) => {
            console.log(element)
        });
    }

}

module.exports = new Employee();
