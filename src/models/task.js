const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema(
    {
        name: String,
        startDate: String,
        endDate: String,
        comment: String,
    },
    { timestamps: true }
)

const task = mongoose.model('task', taskSchema)

module.exports = task
