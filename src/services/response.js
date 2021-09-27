const moment = require('moment')
const {pickBy} = require('lodash')

exports.sendSuccess = (req, res, {
        data = {},
        message = 'Resource successfully retrieved',
        status = 200,
        meta = undefined
    }
) => {
    const response = {
        status: true,
        message,
        data,
        meta
    };
    const update = {
        finished: moment().format('YYYY-MM-DD HH:mm:ss'),
        response
    };
    return res.status(status).json(response).end();
};

exports.sendError = (req, res, { error = {}, message = 'An Error occurred', status = 404 }) => {

    // if (error instanceof SequelizeError) {
    //     error = parseSequelizeError(error);
    // }
    if (error instanceof Error) {
        message = error.message || message;
        status = error.status || status;
        let error_res = pickBy(error, (val, key) => {
            if(['code', 'status', 'statusCode','message'].indexOf(key) === -1){
                return {key: val}
            }
        });
        error = error_res;
    }
    // if (error.isJoi) {
    //     error = parseJoiError(error);
    // }

    const response = {
        status: false,
        message,
        error
    };
    const update = {
        finished: moment().format('YYYY-MM-DD HH:mm:ss'),
        response
    };
    return res.status(status).json(response).end();
};
