//const employee = require('../models/employee');
const {response} = require("../services");
const {employee}  = require('../services')
const {isEmpty, remove, omit, filter} = require('lodash')
const passwordHash = require('password-hash')
const bcrypt = require('bcryptjs')

class Employee {

    async create(req, res) {
        const body = req.body

        if (isEmpty(body)) {
           return response.sendError(req, res, {error: "Request is empty", status : 500})
        }s

        try{
            let data = {
                'first_name': body.first_name,
                'last_name': body.last_name,
                'email': body.email,
                'password': bcrypt.hashSync(body.password, bcrypt.genSaltSync(10))
            }

            const check = await employee.create(data)
            if(isEmpty(check._id)) {
                return response.sendSuccess(req, res, {message: "Employee created successfully", data: check});
            } else {
                return response.sendError(req, res);
            }
        }catch(e){
            response.sendError(req, res, { error: e, status: 500 })
        }
    }

    async update(req, res) {
        const body = req.body

        if (isEmpty(body)) {
           return response.sendError(req, res, {error: "Request is empty", status : 500})
        }

        try{
            const check = await employee.update(body)
            if(isEmpty(check._id)) {
                return response.sendSuccess(req, res, {message: "Employee updated successfully", data: check});
            } else {
                return response.sendError(req, res);
            }
        }catch(e){
            response.sendError(req, res, { error: e, status: 500 })
        }
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
        try {
            const data = await employee.show(req.params.id);

            return response.sendSuccess(req, res, {message: 'Employee returned', data: data});

            // return response.sendSuccess(req, res, {message: 'Employee successfully called', data});
        } catch (e) {
            response.sendError(req, res, { error: e, status: 500 })
        }

        const check = await employee.show({
            "email" : "olumuyiwa@initsng.com"
        })
        res.send(check)
    }

    async login(req, res){
        const body = req.body

        if (isEmpty(body.email)) {
            return response.sendError(req, res, {error: "Email is required", status : 500})
        }

        if (isEmpty(body.password)) {
            return response.sendError(req, res, {error: "Password is required", status : 500})
        }

        try{ 

            const data = await employee.checkEmmployeeEmai(body.email);

            if(bcrypt.compareSync(body.password, data.password)) {
                console.log(this)
                // Employee.remove(data)
                // console.log(data)
                return response.sendSuccess(req, res, {message: 'Employee returned', data: data});
            }

            return response.sendError(req, res, {error: 'Wrong email/ password combination', data: data});
            
        }catch(e){
            response.sendError(req, res, {error: e, status: 500})
        }
    }

    async remove(values){
        let arr = []
        values.forEach((element, index) => {
            console.log(element)
        });
    }

}

module.exports = new Employee();
