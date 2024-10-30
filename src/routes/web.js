const express = require('express')
const rou = express.Router()
const { a, b, viewAdd, createFinish } = require('../controller/practiceControll')

rou.get('/a', a)
rou.get('/b', b)
rou.get('/viewAdd', viewAdd)
rou.post('/create/finish', createFinish)

module.exports = rou