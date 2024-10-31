const { addOne, showAll, ReadOne, updateOne, delOne } = require('../services/practiceService')
const a = (req, res) => {
    res.send('this is page a')
}

const b = (req, res) => {
    res.send('this is page b')
}
const viewAdd = (req, res) => {
    res.render('create.ejs')
}

const showTable = async (req, res) => {
    const result = await showAll()
    res.render('table.ejs', { results: result })
}

const createFinish = async (req, res) => {
    const name = req.body.name
    const password = req.body.password
    const result = await addOne(name, password)
    res.send('ok added')
}

const edit = async (req, res) => {
    const id = req.params.id
    const result = await ReadOne(id)
    res.render('edit', { result: result })
}

const editFinish = async (req, res) => {
    const name = req.body.name
    const password = req.body.password
    const id = req.body.id
    console.log(name, password, id)
    const result = await updateOne(name, password, id)
    res.redirect('/table')
}

const del = async (req, res) => {
    const id = req.params.id
    const result = await ReadOne(id)
    res.render('del.ejs', { result: result })
}

const delFinish = async (req, res) => {
    const id = req.body.id
    console.log(id)
    const result = await delOne(id)
    res.redirect('/table')
}

module.exports = {
    a, b, viewAdd, createFinish, showTable, edit, editFinish, del, delFinish
}