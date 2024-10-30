const a = (req, res) => {
    res.send('this is page a')
}

const b = (req, res) => {
    res.send('this is page b')
}
const viewAdd = (req, res) => {
    res.render('create.ejs')
}

const createFinish = (req, res) => {
    console.log(req.body)
    res.send('ok PXQL');
}

module.exports = {
    a, b, viewAdd, createFinish
}