const router = require('express').Router();
const express = require('express');
const User = require('../model/User.js');
const jwt = require('jsonwebtoken');
const client = require('twilio')('ACbb90fb91968351c5c55cd0f8d874dd52', '415bae3c512b7d2a33e13d11db45b535');

let OTP = "";
let user;

router.use(express.json());

router.post('/login', async (req, res) => {
  try {
    console.log('req body', req.body);
    const { username, phone_number } = req.body;
    const existingUser = await User.findOne({ phone_number });

    if (!existingUser) {
      return res.status(400).json({ msg: 'User with the same phone number does not exist!' });
    }

    // Set the global user variable
    user = existingUser;

    // Update existing user with OTP
    OTP = Math.floor(1000 + Math.random() * 9000);
    await User.findOneAndUpdate({ phone_number: phone_number }, { $set: { OTP: OTP } }, { new: true });

    await client.messages.create({
      body: `Your OTP verification code is ${OTP}`,
      from: '+12014488186',
      to: '+8801878429248',
    });

    // Respond with the user directly
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login/verify", async (req, res) => {
  try {
    console.log("otp", req.body.otp, "OTP", OTP, "user", user);
    const { otp } = req.body;

    if (otp != OTP) {
      return res.status(400).json({ msg: "Incorrect OTP" });
    }

    // Mark the user as verified
    await User.findOneAndUpdate({ _id: user._id }, { $set: { verified: true } });

    // Clear the OTP after successful verification
    OTP = "";

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, "your-secret-key");

    // Respond with the token and user information
    res.status(200).json({ token, ...user._doc, verified: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;