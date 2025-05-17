const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config()
const nodemailer = require('nodemailer')
const transporter = require('../utility/sendMail')

const generateOtp = ()=>{
    return Math.floor(1000 + Math.random() * 9000)
}

const generateOtpExpiry = ()=>{
    return Date.now() + 5 * 60 * 1000
}

// const otpExpiry = Date.now() + 5 * 60 * 1000
// console.log((new Date(otpExipry).toLocaleString()))

exports.Signup = async(req,res,next)=>{
    try{
        const {name, email, password } = req.body;
        if(!(name && email && password))
        {
            return res.status(400).json({message:'All fields are required'})
        }

        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message:'User already exist'})
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        // console.log("Hashed Password during Signup: ", hash);


        const otp = generateOtp();
        const otpExpiry = generateOtpExpiry();

        const user = new User({name,email,password:hash,otp:otp,otpExpiry:otpExpiry});
        await user.save();
        res.status(200).json({user,message:`User created successfully! and your otp is ${otp}`})

        // send mail through nodemailer

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Email Confirmation",
            text: `Your otp is ${otp} and has expiry of 5 minutes.`, 
         
          });
    }
    catch(err){
        next(err)
    }   
}

exports.ConfirmOtp = async(req,res,next)=>{
    try{
        const {email,otp} = req.body;

        if(! (email && otp)){
            return res.status(400).json({message:'All fields are required'})
        }

        const existingUser = await User.findOne({email})
        if(!existingUser){
            return res.status(400).json({message:'User does not exist'})
        }

        if((parseInt(otp)) !== existingUser.otp){
            return res.status(400).json({message:'otp does not match'})
        }

        const currentTime = Date.now();
        if(currentTime > existingUser.otpExpiry){
            return res.status(400).json({message:'OTP has expired'})
        }

        existingUser.otp = null;
        existingUser.otpExpiry = null;
        await existingUser.save()

        res.status(200).json({message:'otp matched successfully'})
        }
    catch(err){
        next(err)
    }

}

exports.Login = async(req,res,next)=>{
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({message:'All fields are required'})
        }

        const existingUser = await User.findOne({email})
        if(!existingUser){
            return res.status(400).json({message:'User does not exist'})
        }

        // console.log("Password", 123, password, typeof(password))
        // console.log('existing Pass: ', 456,  existingUser.password, typeof(existingUser.password))

        const match = await bcrypt.compare(password, existingUser.password)
        
        if(!match){
            return res.status(400).json({message:'Password is incorrect'})
        }

        const token = jwt.sign({id:existingUser._id,name:existingUser.name},process.env.SECRET,{expiresIn:'1h'})

        res.status(200).json({message:'Login successful',token,existingUser})
        }
    catch(err){
        next(err)
    }

}

exports.ForgotPassword = async(req,res,next)=>{
    try{
        const {email} = req.body;

        if(!email){
            return res.status(400).json({message:'Email is required'})
        }

        const existingUser = await User.findOne({email})
        if(!existingUser){
            return res.status(400).json({message:'User does not exist'})
        }

        const otp = generateOtp();
        const otpExpiry = generateOtpExpiry();

        existingUser.otp = otp;
        existingUser.otpExpiry = otpExpiry;
        await existingUser.save();
        
        res.status(200).json({message:`otp sent successfully.Your otp is ${otp} and will get expire in 5mins`})

        // send mail through nodemailer

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Email Confirmation",
            text: `Your otp is ${otp} and has expiry of 5 minutes.`, 
         
          });
    }
    catch(err){
        next(err)
    }
}

exports.ConfirmPassword = async(req,res,next)=>{
    try{
        const {email,otp,password} = req.body;

        if(!email || !otp || !password){
            return res.status(400).json({message:'All fields are required'})
        }

        const existingUser = await User.findOne({email})
        if(!existingUser){
            return res.status(400).json({message:'User does not exist'})
        }

        if(otp !== existingUser.otp){
            return res.status(400).json({message:'Wrong otp'})
        }

        existingUser.otp = null;
        existingUser.otpExpiry = null;
        existingUser.password = password;
        existingUser.save()

        res.status(200).json({message:'Password reset successfully'})
        }
    catch(err){
        next(err)
    }
}