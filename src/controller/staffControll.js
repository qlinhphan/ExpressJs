const { addOne, addMany, EditOne, delOne, delMany, pages } = require('../services/staffService')

const addOneStaff = async (req, res) => {
    const obj = req.body.obj
    console.log(obj)
    const result = await addOne(obj)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

const addManyStaff = async (req, res) => {
    const arrObj = req.body.arrObj
    const result = await addMany(arrObj)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

const editOneStaff = async (req, res) => {
    const obj = req.body.obj
    const result = await EditOne(obj)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

const delOneStaff = async (req, res) => {
    const id = req.body.id
    const result = await delOne(id)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

const delManyStaff = async (req, res) => {
    const arrId = req.body.arrId
    const result = await delMany(arrId)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

const pageStaff = async (req, res) => {
    const limit = req.query.limit
    const page = req.query.page
    const result = await pages(limit, page, req.query)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

module.exports = {
    addOneStaff, addManyStaff, editOneStaff, delOneStaff, delManyStaff, pageStaff
}