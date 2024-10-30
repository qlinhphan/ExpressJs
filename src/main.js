const express = require('express')
const app = express()

const port = 3307

const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const connectToMysql = require('./config/mysqlConfig')
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')
// app.use(express.static(path.join(__dirname, 'public')))

const viewConfig = require('./config/viewConfig')
const rou = require('./routes/web')
viewConfig(app)
app.use('', rou)

app.listen(port, async () => {
    const [result, filed] = await connectToMysql.query(
        `select * from whos`
    )
    console.log(result)
    console.log('server is on port: ', port)
})