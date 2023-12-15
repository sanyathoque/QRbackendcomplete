// const router = require('express').Router()
// const express = require('express')
// const Vehicle = require('../model/Vehicle.js')
// const Driver = require('../model/Driver.js')
// const PdfSchema = require("../model/pdfDetails.js");
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')
// const fs = require("fs");
// const multer = require("multer");

// router.use('/files', express.static('files'));

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './files');
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });

// const upload = multer({ storage: storage })

// router.post('/upload-files', upload.array('files', 6), async (req, res) => {
//   console.log("INFORMATION  ===> ", req.files);
//   console.log("INFORMATION1  ===> ", req.files[0].filename);
//   console.log("INFORMATION2  ===> ", req.files[1].filename);
//   console.log("INFORMATION3  ===> ", req.files[2].filename);
//   console.log("INFORMATION4  ===> ", req.files[3].filename);
//   console.log("INFORMATION5  ===> ", req.files[4].filename);
//   console.log("INFORMATION6  ===> ", req.files[5].filename);

//   try {
//     await Vehicle.create({
//       firstname: req.body.firstname,
//       lastname: req.body.lastname,
//       DOB: req.body.DOB,
//       male: req.body.male,
//       female: req.body.female,
//       car: req.body.car,
//       bike: req.body.bike,
//       auto: req.body.auto,
//       driver: req.body.driver,
//       vehicle_detail: req.body.vehicle_detail,
//       appearance: req.body.appearance,
//       RC: req.body.RC,
//       vehicle_insurance: req.body.vehicle_insurance,
//       tax_permit: req.body.tax_permit,
//       vehicle_fitness: req.body.vehicle_fitness,
//       profile_picture: req.files[0].filename,
//       appearance_frontside: req.files[1].filename,
//       appearance_backside: req.files[2].filename,
//       vehicle_insurance_pic: req.files[3].filename,
//       vehicle_fitness_pic: req.files[4].filename,
//       registration_certificate: req.files[5].filename,
//     });
//     res.send({ status: 'OK' });
//   } catch (error) {
//     res.json({ status: error });
//   }
// });

// router.get("/get-files", async (req, res) => {
//   try {
//     Vehicle.find({}).then((data) => {
//       res.send({ status: "ok", data: data });
//     });
//   } catch (error) { }
// });


// module.exports = router
