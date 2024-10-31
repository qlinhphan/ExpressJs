const mongoose = require('mongoose')

const connectToMongoose = async () => {
    opt = {
        dbName: 'HOM_NAY',
        user: 'root',
        pass: '123456'
    }

    await mongoose.connect('mongodb://localhost:27017/', opt)
}

module.exports = connectToMongoose