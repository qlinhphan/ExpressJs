const express = require('express')

const rouApi = express.Router()

const { addOneStaff, addManyStaff, editOneStaff, delOneStaff, delManyStaff, pageStaff } = require('../controller/staffControll')

rouApi.post('/staff', addOneStaff)
rouApi.post('/staffs', addManyStaff)
rouApi.put('/staff', editOneStaff)
rouApi.delete('/staff', delOneStaff)
rouApi.delete('/staffs', delManyStaff)
rouApi.get('/staffs', pageStaff)

module.exports = rouApi