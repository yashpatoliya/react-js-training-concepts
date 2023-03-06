const jwt = require('jsonwebtoken');

const getuser = (req, res) => {
    const token = req.body.token
    const decoded = jwt.verify(token, 'BLOGS');

    console.log(decoded);
    return res.json(decoded)
}
module.exports = {getuser};