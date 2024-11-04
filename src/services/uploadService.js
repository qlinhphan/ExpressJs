const { error } = require('console')
const path = require('path')

const uploadFile = async (objFile) => {
    const pathUp = path.resolve(__dirname, '../public/image')
    const extName = path.extname(objFile.name)
    const baseName = path.basename(objFile.name, extName)
    const finalName = `${baseName}-${Date.now()}${extName}`
    const finalPath = `${pathUp}/${finalName}`
    try {
        await objFile.mv(finalPath)
        return {
            status: 200,
            path: finalName,
            error: 'no-err'
        }
    } catch (error) {
        return {
            status: 404,
            path: 'no-path',
            error: JSON.stringify(error)
        }
    }
}

module.exports = uploadFile