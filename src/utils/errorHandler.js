const { Mongoose } = require("mongoose")

exports.extractErrorMsgs = (error) => {
    const isInstanceOfMongoose = error instanceof Mongoose;

    if(isInstanceOfMongoose) {
        const errors = Object.values(error.error);
        const msgs = errors.map((e) => e.message);
        return msgs;
    }

    return [err.message]
}