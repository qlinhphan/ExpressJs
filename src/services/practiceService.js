const connectToMysql = require('../config/mysqlConfig')

const addOne = async (name, password) => {
    const [result, field] = await connectToMysql.query(
        `insert into whos(user, password)
        values(?, ?)`, [name, password]
    )
    return result

}

const showAll = async () => {
    const [result, field] = await connectToMysql.query(
        `select* from whos`
    )
    return result
}

const ReadOne = async (id) => {
    const [result, field] = await connectToMysql.query(
        `select* from whos where id=?`, [id]
    )
    const user = result && result.length > 0 ? result[0] : {}
    return user
}

const updateOne = async (name, password, id) => {
    const [result, field] = await connectToMysql.query(
        `update whos set user=?, password=? where id =?`, [name, password, id]
    )
    return result
}

const delOne = async (id) => {
    const [result, field] = await connectToMysql.query(
        `delete from whos where id =?`, [id]
    )
    return result
}

module.exports = {
    addOne, showAll, ReadOne, updateOne, delOne
}

