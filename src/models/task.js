const mongoose = require('mongoose')

const mongoose_delete = require('mongoose-delete')
const taskSchema = new mongoose.Schema(
    {
        name: String,
        startDate: String,
        endDate: String,
        comment: String,
    },
    { timestamps: true }
)

taskSchema.plugin(mongoose_delete, { overrideMethods: true })

const task = mongoose.model('task', taskSchema)

module.exports = task
