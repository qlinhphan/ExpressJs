const company = require('../models/company')
const aqp = require('api-query-params')
const addOne = async (obj) => {
    if (obj.model === "add-one-company") {
        const result = await company.create(obj)
        return result
    }
    if (obj.model === 'add-project-for-company') {
        const searchC = await company.findById(obj.idC)
        const idP = obj.idP
        searchC.project.push(...idP)
        await searchC.save()
        return searchC
    }
    if (obj.model === "del-project-for-company") {
        const searchC = await company.findById(obj.idC)
        const idP = obj.idP
        for (let i = 0; i < obj.idP.length; i++) {
            for (let j = 0; j < searchC.project.length; j++) {
                if (obj.idP[i] == searchC.project[j]) {
                    searchC.project.pull(searchC.project[j])
                }
            }
        }
        await searchC.save()
        return searchC
    }
}

const editOne = async (obj) => {
    const result = await company.update({ _id: obj.id }, { ...obj })
    return result
}

const delOne = async (id) => {
    const result = await company.delete({ _id: id })
    return result
}

const pagination = async (limit, page, queryStr) => {
    const skip = (page - 1) * limit
    const { filter } = aqp(queryStr)
    delete filter.page
    console.log(filter)
    const result = await company.find(filter).populate({ path: 'project', populate: ['task', 'staff'] }).skip(skip).limit(limit)
    return result
}

module.exports = {
    addOne, editOne, delOne, pagination
}