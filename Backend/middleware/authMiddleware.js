const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = (req,res,next)=>{
    try{
        const header = req.headers.authorization;
        if(!header){
            return res.status(400).json({message:'header not provided'})
        }

        const token = header.split(" ")[1]
        if(!token){
            return res.status(400).json({message:'token not provided'})
        }

        const decoded = jwt.verify(token,process.env.SECRET)
        if(!decoded){
            return res.status(400).json({message:'Invalid token'})
        }

        req.user = {
            id: decoded.id,
            name: decoded.name,
        }

        next()
    }
    catch(err){
        next(err)
    }
}