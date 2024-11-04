const { addOne, editOne, delOne, pagination } = require('../services/companyService')

const addOneCompany = async (req, res) => {
    const obj = req.body.obj
    const result = await addOne(obj)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

const editOneCompany = async (req, res) => {
    const obj = req.body.obj
    const result = await editOne(obj)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

const delOneCompany = async (req, res) => {
    const id = req.body.id
    const result = await delOne(id)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

const paginationCompany = async (req, res) => {
    const limit = req.query.limit
    const page = req.query.page
    const result = await pagination(limit, page, req.query)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

module.exports = {
    addOneCompany, editOneCompany, delOneCompany, paginationCompany
}