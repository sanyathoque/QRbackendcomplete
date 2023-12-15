const router = require('express').Router()
const express = require('express')
const Vehicle = require('../model/Vehicle.js')
const Driver = require('../model/Driver.js')
const PdfSchema = require("../model/pdfDetails.js");
const bcrypt = require('bcryptjs')
const fs = require("fs");
const multer = require("multer");
const User = require('../model/User.js');
const jwt = require('jsonwebtoken');
const client = require('twilio')('ACbb90fb91968351c5c55cd0f8d874dd52', '415bae3c512b7d2a33e13d11db45b535');


router.use('/files', express.static('files'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage })

router.post('/vehicle_register', upload.array('files', 6), async (req, res) => {
  console.log("INFORMATION_FILES  ===> ", req.files)
  console.log("INFORMATION_body  ===> ", req.body)
  console.log("INFORMATION1  ===> ", req.files[0].filename);
  console.log("INFORMATION2  ===> ", req.files[1].filename);
  console.log("INFORMATION3  ===> ", req.files[2].filename);
  console.log("INFORMATION4  ===> ", req.files[3].filename);
  console.log("INFORMATION5  ===> ", req.files[4].filename);
  console.log("INFORMATION6  ===> ", req.files[5].filename);

  try {
    await Vehicle.create({
      username: req.body.username,
      phone_number: req.body.phone_number,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      DOB: req.body.DOB,
      male: req.body.male,
      female: req.body.female,
      car: req.body.car,
      bike: req.body.bike,
      auto: req.body.auto,
      driver: req.body.driver,
      vehicle_detail: req.body.vehicle_detail,
      appearance: req.body.appearance,
      RC: req.body.RC,
      vehicle_insurance: req.body.vehicle_insurance,
      tax_permit: req.body.tax_permit,
      vehicle_fitness: req.body.vehicle_fitness,
      profile_picture: req.files[0].filename,
      appearance_frontside: req.files[1].filename,
      appearance_backside: req.files[2].filename,
      vehicle_insurance_pic: req.files[3].filename,
      vehicle_fitness_pic: req.files[4].filename,
      registration_certificate: req.files[5].filename,
    });
    res.send({ status: 'OK' });
  } catch (error) {
    res.json({ status: error });
  }
});

router.get("/get-files", async (req, res) => {
  try {
    Vehicle.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) { }
});

let OTP = "";
let vehicle;

router.use(express.json());

router.post('/login', async (req, res) => {
  try {
    console.log('req body', req.body);
    const { username, phone_number } = req.body;
    const existingVehicle = await Vehicle.findOne({ phone_number });

    if (!existingVehicle) {
      return res.status(400).json({ msg: 'User with the same phone number does not exist!' });
    }

    // Set the global user variable
    vehicle = existingVehicle;

    // Update existing user with OTP
    OTP = Math.floor(1000 + Math.random() * 9000);
    await Vehicle.findOneAndUpdate({ phone_number: phone_number }, { $set: { OTP: OTP } }, { new: true });

    await client.messages.create({
      body: `Your OTP verification code is ${OTP}`,
      from: '+12014488186',
      to: '+8801878429248',
    });

    // Respond with the user directly
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login/verify", async (req, res) => {
  try {
    console.log("otp", req.body.otp, "OTP", OTP, "vehicle", vehicle);
    const { otp } = req.body;
    if (otp != OTP) {
      return res.status(400).json({ msg: "Incorrect OTP" });
    }
    // Mark the user as verified
    await Vehicle.findOneAndUpdate({ _id: vehicle._id }, { $set: { verified: true } });
    // Clear the OTP after successful verification
    OTP = "";
    // Generate JWT token
    const token = jwt.sign({ id: vehicle._id }, "your-secret-key");
    await Vehicle.findOneAndUpdate({ _id: vehicle._id }, { $set: { token: token } });
    // Respond with the token and user information
    res.status(200).json({ ...vehicle._doc, token, verified: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;