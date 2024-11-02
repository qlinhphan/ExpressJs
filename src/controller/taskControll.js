const { addOne, addMany, editOne, delOne, delMany, pagination } = require('../services/taskService')

const addOneTask = async (req, res) => {
    const obj = req.body.obj
    const result = await addOne(obj)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

const addManyTask = async (req, res) => {
    const arrObj = req.body.arrObj
    const result = await addMany(arrObj)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

const editOneTask = async (req, res) => {
    const obj = req.body.obj
    const result = await editOne(obj)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

const delOneTask = async (req, res) => {
    const id = req.body.id
    const result = await delOne(id)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

const delManyTask = async (req, res) => {
    const arrId = req.body.arrId
    const result = await delMany(arrId)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

const paginations = async (req, res) => {
    const limit = req.query.limit
    const page = req.query.page
    const result = await pagination(limit, page, req.query)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}


module.exports = {
    addOneTask, addManyTask, editOneTask, delOneTask, delManyTask, paginations
}