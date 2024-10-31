const express = require('express')
const rou = express.Router()
const { a, b, viewAdd, createFinish, showTable, edit, editFinish, del, delFinish } = require('../controller/practiceControll')

rou.get('/a', a)
rou.get('/b', b)
rou.get('/viewAdd', viewAdd)
rou.post('/create/finish', createFinish)
rou.get('/table', showTable)
rou.get('/edit/:id', edit)
rou.post('/editFinish', editFinish)
rou.get('/del/:id', del)
rou.post('/delFinish', delFinish)

module.exports = rou