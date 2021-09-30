//const employee = require('../models/employee');
const {response} = require("../services");
const {team}  = require('../services')
const {isEmpty} = require('lodash')

class Team {

    async create(req, res) {
        const body = req.body
        //if body is empty
        //validate

        if (isEmpty(body)) {
           return response.sendError(req, res, {error: "Request is empty", status : 500})
        }

        try{
            const check = await team.create(body)
            if(isEmpty(check._id)) {
                return response.sendSuccess(req, res, {message: "Team created successfully", data: check});
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
            const check = await team.update(body)
            if(isEmpty(check._id)) {
                return response.sendSuccess(req, res, {message: "Team updated successfully", data: check});
            } else {
                return response.sendError(req, res);
            }
        }catch(e){
            response.sendError(req, res, { error: e, status: 500 })
        }
    }

    async list(req, res) {
        try {
            const data = await team.list();
            return response.sendSuccess(req, res, {message: 'Teams successfully called', data});
        } catch (e) {
            response.sendError(req, res, { error: e, status: 500 })
        }
    }

    async show(req, res){
        try {
            const data = await team.show(req.params.id);

            return response.sendSuccess(req, res, {message: 'Team returned', data: data});
        } catch (e) {
            response.sendError(req, res, { error: e, status: 500 })
        }

        const check = await employee.show({
            "name" : "node team"
        })
        res.send(check)
    }

}

module.exports = new Team();
