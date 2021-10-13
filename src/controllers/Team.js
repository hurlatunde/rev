//const employee = require('../models/employee');
const {response} = require("../services");
const {team}  = require('../services')
const {isEmpty} = require('lodash')
const {teamValidate} = require('../utilites/validation')

class Team {

    async create(req, res) {
        const body = req.body
       
        const { error, value, message } = await teamValidate.create(body)
        if(error){
            return response.sendError(req, res, {"message": message, status : 500})
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

        const { error, value, message } = await teamValidate.edit(body)
        if(error){
            return response.sendError(req, res, {"message": message, status : 500})
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
