const jwt = require('jsonwebtoken')

function getToken(payload){
    return jwt.sign(payload, 'rahasianegara')
}
function checkToken(token){
    return jwt.verify(token, 'rahasianegara')
}



module.exports = {checkToken, getToken}