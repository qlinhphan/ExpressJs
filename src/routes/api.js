const express = require('express')

const rouApi = express.Router()

const { addOneStaff, addManyStaff, editOneStaff, delOneStaff, delManyStaff, pageStaff } = require('../controller/staffControll')

const { addOneTask, addManyTask, editOneTask, delOneTask, delManyTask, paginations } = require('../controller/taskControll')

const { addOneProject, editOneProject, delOneProject, findProject } = require('../controller/projectControll')

const { addOneCompany, editOneCompany, delOneCompany, paginationCompany } = require('../controller/companyControll')

const uploadFileObj = require('../controller/uploadControll')

rouApi.post('/staff', addOneStaff)
rouApi.post('/staffs', addManyStaff)
rouApi.put('/staff', editOneStaff)
rouApi.delete('/staff', delOneStaff)
rouApi.delete('/staffs', delManyStaff)
rouApi.get('/staffs', pageStaff)

rouApi.post('/task', addOneTask);
rouApi.post('/tasks', addManyTask);
rouApi.put('/task', editOneTask)
rouApi.delete('/task', delOneTask)
rouApi.delete('/tasks', delManyTask)
rouApi.get('/tasks', paginations)

rouApi.post('/project', addOneProject)
rouApi.put('/project', editOneProject)
rouApi.delete('/project', delOneProject)
rouApi.get('/project', findProject)

rouApi.post('/company', addOneCompany)
rouApi.put('/company', editOneCompany)
rouApi.delete('/company', delOneCompany)
rouApi.get('/company', paginationCompany)

rouApi.post('/up', uploadFileObj)


module.exports = rouApi