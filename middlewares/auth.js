const jwt = require('jsonwebtoken');
const cfg = require('../config/config');

module.exports = (req,res,next) => {
    const token = req.cookies['SESSION_TOKEN'];
    if(token) { 
    jwt.verify(token , cfg.development.SECRET ,(err,decoded) => {
            if(err) { 
                res.clearCookie('SESSION_TOKEN');
                console.log(err);
            }else { 
                req.user = decoded;
                res.locals.user = decoded;
                res.locals.isAuthenticated = true;
            }
           
        });
    }
    next();
}
