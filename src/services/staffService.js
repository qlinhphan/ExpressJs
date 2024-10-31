const staff = require('../models/staff')

const aqp = require('api-query-params')

const addOne = async (obj) => {
    const result = await staff.create(obj)
    return result
}

const addMany = async (arrObj) => {
    const result = await staff.create(arrObj)
    return result
}

const EditOne = async (obj) => {
    const result = await staff.update({ _id: obj.id }, { ...obj })
    return result
}

const delOne = async (id) => {
    const result = await staff.delete({ _id: id })
    return result
}

const delMany = async (arrId) => {
    const result = await staff.delete({ _id: { $in: arrId } })
    return result
}

const pages = async (limit, page, queryStr) => {
    const skip = (page - 1) * limit
    const { filter } = aqp(queryStr)
    delete filter.page
    console.log(filter)
    const result = await staff.find(filter).skip(skip).limit(limit)
    return result
}

module.exports = {
    addOne, addMany, EditOne, delOne, delMany, pages
}