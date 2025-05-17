const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers')

router.post("/signup",authController.Signup)
router.post("/confirm-otp",authController.ConfirmOtp)
router.post("/login",authController.Login)
router.post("/forgot-password",authController.ForgotPassword)
router.post("/confirm-password",authController.ConfirmPassword)


module.exports = router;