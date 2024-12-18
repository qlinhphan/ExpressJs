const express = require('express')
const app = express()

const port = 3307

const path = require('path')

const { MongoClient } = require('mongodb')

const fileUpload = require('express-fileupload')
app.use(fileUpload())

const connectToMongoose = require('./config/connectToMongoose')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const connectToMysql = require('./config/mysqlConfig')
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')
// app.use(express.static(path.join(__dirname, 'public')))

const viewConfig = require('./config/viewConfig')
const rou = require('./routes/web')
const rouApi = require('./routes/api')
viewConfig(app)
app.use('', rou)
app.use('/api', rouApi)

    ; (async () => {
        try {
            await connectToMongoose();
            // const url = 'mongodb://root:123456@localhost:27017/?authSource=admin'
            // const client = new MongoClient(url)
            // await client.connect()
            // const db = client.db('ext')
            // const collect = db.collection('staffs')
            // collect.insertOne({ name: "Trang", age: "21" })
            app.listen(port, async () => {
                console.log('server is on port: ', port)
            })
        } catch (error) {
            console.log("BIG BUG: ", error)
        }
    })()

