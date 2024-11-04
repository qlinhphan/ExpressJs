const project = require('../models/project')

const aqp = require('api-query-params')

const addOne = async (obj) => {
    if (obj.status === "add-project") {
        const result = await project.create(obj)
        return result
    }
    if (obj.status === "add-taskAndStaff-for-project") {
        const searchP = await project.findById(obj.idProject)
        console.log(searchP)
        searchP.task.push(...obj.idTask)
        searchP.staff.push(...obj.idStaff)
        await searchP.save()
        return searchP
    }
    if (obj.status === "del-taskAndStaff-for-project") {
        const searchP = await project.findById(obj.idProject)
        for (let i = 0; i < obj.idTask.length; i++) {
            for (let j = 0; j < searchP.task.length; j++) {
                if (obj.idTask[i] == searchP.task[j]) {
                    searchP.task.pull(searchP.task[j])
                }
            }
        }
        for (let i = 0; i < obj.idStaff.length; i++) {
            for (let j = 0; j < searchP.staff.length; j++) {
                if (obj.idStaff[i] == searchP.staff[j]) {
                    searchP.staff.pull(searchP.staff[j])
                }
            }
        }
        await searchP.save()
        return searchP
    }
}

const editOne = async (obj) => {
    const result = await project.update({ _id: obj.id }, { ...obj })
    return result
}

const delOne = async (id) => {
    const result = await project.delete({ _id: id })
    return result
}

const finds = async (limit, page, queryStr) => {
    const skip = (page - 1) * limit
    const { filter } = aqp(queryStr)
    delete filter.page
    console.log(filter)
    const result = await project.find(filter).populate("task").populate('staff').skip(skip).limit(limit)
    return result
}

module.exports = {
    addOne, editOne, delOne, finds
}