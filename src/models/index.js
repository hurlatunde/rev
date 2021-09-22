const mongoose = require('mongoose')
const Staff = require('./staff')

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Staff };

export { connectDb };

export default models;
