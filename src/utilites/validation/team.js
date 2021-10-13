const Joi = require('joi');

const create = async (data)=>{
    const schema = Joi.object({
        name: Joi.string().required().min(3),
        
        description: Joi.string().required()
    })

    try {
        return await schema.validateAsync(data, { abortEarly: false});
     }
     catch (err) {
         // return { error, value } = schema.validate(data);
         return {"error" : true, "message": err.message}
     }
}

const edit = async (data)=>{
    const schema = Joi.object({
        name: Joi.string().required().min(3),

        description: Joi.string().required()
    })

    try {
       return await schema.validateAsync(data, { abortEarly: false});
    }
    catch (err) {
        // return { error, value } = schema.validate(data);
        return {"error" : true, "message": err.message}
    }
}

module.exports = {create, edit}