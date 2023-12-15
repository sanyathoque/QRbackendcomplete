const router = require('express').Router();
const express = require('express');
const Vehicle = require('../model/Vehicle.js');
const Driver = require('../model/Driver.js');
const User = require('../model/User.js');
const PdfSchema = require('../model/pdfDetails.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const multer = require('multer');
const accountSid = 'ACbb90fb91968351c5c55cd0f8d874dd52';
const authToken = '415bae3c512b7d2a33e13d11db45b535';
const client = require('twilio')(accountSid, authToken);

let OTP = 3490;
let user;

// Use express.json() middleware to parse JSON-encoded bodies
router.use(express.json());

router.post('/signup', async (req, res) => {
  try {
    console.log('req body', req.body);
    const { username, number } = req.body;
    const existingUser = await User.findOne({ number });
    // if (existingUser) { return res.status(400).json({ msg: 'User with the same number already exists!' }) }
    user = new User({
      username,
      number,
    });
    OTP = Math.floor(1000 + Math.random() * 9000);
    await client.messages.create({
      body: `Your otp verification for user is ${OTP}`,
      from: '+12014488186',
      to: '+8801878429248',
    }).then(() => res.status(200).json({
      msg: 'Message Sent',
    }));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/signup/verify", async (req, res) => {
  try {
    console.log("otp", req.body)
    const { benefit } = req.body
    console.log("OTP", OTP)
    if (otp != OTP) { return res.status(400).json({ msg: "Incorrect Otp" }) }
    user = await user.save()
    const token = jwt.sign({ id: user._id }, "passwordkey")
    res.status(200).json({ token, ...user._doc })
    OTP = ""
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})


module.exports = router
