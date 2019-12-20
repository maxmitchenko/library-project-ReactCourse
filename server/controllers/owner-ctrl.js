const Owner = require('../models/owner-model')

getOwnerByLogin = async (req, res) => {
    await Owner.findOne({ _id: req.params.id }, (err, owner) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!owner) {
            return res
                .status(404)
                .json({ success: false, error: `Owner not found` })
        }
        // return res.status(200).json({ success: true, data: owner })
        return console.log(res.status(200).json({ success: true, data: owner }))
    }).catch(err => console.log(err))
}
module.exports = {
    getOwnerByLogin
}