const connectToMongoose = require('../config/connectToMongoose')
const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')



const staffSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        city: String,
        password: String
    },
    { timestamps: true }
)

staffSchema.plugin(mongoose_delete, { overrideMethods: true })
const staff = mongoose.model('staff', staffSchema)

module.exports = staff