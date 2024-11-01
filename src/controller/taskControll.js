const { addOne } = require('../services/taskService')

const addOneTask = async (req, res) => {
    const obj = req.body.obj
    const result = await addOne(obj)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

module.exports = {
    addOneTask
}