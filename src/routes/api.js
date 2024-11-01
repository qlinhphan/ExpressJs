const express = require('express')

const rouApi = express.Router()

const { addOneStaff, addManyStaff, editOneStaff, delOneStaff, delManyStaff, pageStaff } = require('../controller/staffControll')

const { addOneTask } = require('../controller/taskControll')

rouApi.post('/staff', addOneStaff)
rouApi.post('/staffs', addManyStaff)
rouApi.put('/staff', editOneStaff)
rouApi.delete('/staff', delOneStaff)
rouApi.delete('/staffs', delManyStaff)
rouApi.get('/staffs', pageStaff)

rouApi.post('/task', addOneTask);

module.exports = rouApi