const uploadFile = require('../services/uploadService')

const uploadFileObj = async (req, res) => {
    const objFile = req.files.image
    const result = await uploadFile(objFile)
    return res.status(200).json({
        EC: 0,
        result: result
    })
}

module.exports = uploadFileObj