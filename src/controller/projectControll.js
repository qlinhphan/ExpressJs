const { addOne, editOne, delOne, finds } = require('../services/projectService')

const addOneProject = async (req, res) => {
    const obj = req.body.obj
    const result = await addOne(obj)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}
const editOneProject = async (req, res) => {
    const obj = req.body.obj
    const result = await editOne(obj)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

const delOneProject = async (req, res) => {
    const id = req.body.id
    const result = await delOne(id)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

const findProject = async (req, res) => {
    const limit = req.query.limit
    const page = req.query.page
    const result = await finds(limit, page, req.query)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

module.exports = {
    addOneProject, editOneProject, delOneProject, findProject
}