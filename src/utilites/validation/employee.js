const Joi = require('joi');

const  login = async (data)=>{
    const schema = Joi.object({
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })
    
    // schema.validate(data);

    try {
       return await schema.validateAsync(data, { abortEarly: false});
    }
    catch (err) {
        // return { error, value } = schema.validate(data);
        return {"error" : true, "message": err.message}
    }
 
}

const create = async (data)=>{
    const schema = Joi.object({
        first_name: Joi.string().required().min(3).max(15),

        last_name: Joi.string().required().min(4).max(20),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })
    
    // schema.validate(data);

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
        first_name : Joi.string()
                    .required().min(3).max(15),

        email : Joi.string()
                .email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}})
    })

    try {
        return await schema.validateAsync(data, { abortEarly: false});
     }
     catch (err) {
         // return { error, value } = schema.validate(data);
         return {"error" : true, "message": err.message}
     }

}

module.exports = {
    login, create, edit
}