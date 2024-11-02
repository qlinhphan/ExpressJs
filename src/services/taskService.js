const task = require('../models/task')

const aqp = require('api-query-params')

const addOne = async (obj) => {
    const result = await task.create(obj)
    return result
}

const addMany = async (arrObj) => {
    const result = await task.create(arrObj)
    return result
}

const editOne = async (obj) => {
    const result = await task.update({ _id: obj.id }, { ...obj })
    return result
}

const delOne = async (id) => {
    const result = await task.delete({ _id: id })
    return result
}

const delMany = async (arrId) => {
    const result = await task.delete({ _id: { $in: arrId } })
    return result
}

const pagination = async (limit, page, queryStr) => {
    const skip = (page - 1) * limit
    const { filter } = aqp(queryStr)
    delete filter.page
    console.log(filter)
    const result = await task.find(filter).skip(skip).limit(limit)
    return result
}

module.exports = {
    addOne, addMany, editOne, delOne, delMany, pagination
}