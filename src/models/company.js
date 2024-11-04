const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')
const companySchema = new mongoose.Schema(
    {
        name: String,
        address: String,
        foundBy: String,
        status: String,
        project: [{ type: mongoose.Schema.Types.ObjectId, ref: 'project' }]
    },

    { timestamps: true }
)
companySchema.plugin(mongoose_delete, { overrideMethods: true })
const company = mongoose.model('company', companySchema)

module.exports = company 