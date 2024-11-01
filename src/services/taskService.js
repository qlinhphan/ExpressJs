const task = require('../models/task')

const addOne = async (obj) => {
    const result = await task.create(obj)
    return result
}

module.exports = {
    addOne
}