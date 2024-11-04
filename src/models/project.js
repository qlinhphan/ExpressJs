const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')

const projectSchema = new mongoose.Schema(
    {
        name: String,
        startDate: String,
        endDate: String,
        description: String,
        task: [{ type: mongoose.Schema.Types.ObjectId, ref: 'task' }],
        staff: [{ type: mongoose.Schema.Types.ObjectId, ref: 'staff' }],
    },
    { timestamps: true }
)
projectSchema.plugin(mongoose_delete, { overrideMethods: true })

const project = mongoose.model('project', projectSchema)

module.exports = project