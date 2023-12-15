// const router = require('express').Router()
// const Vehicle = require('../model/Vehicle.js')
// const Driver = require('../model/Driver.js')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')
// const fs = require("fs");
// const multer = require("multer");
// const { registerValidation, loginValidation } = require('../validation')


// // Multer configuration
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }]);
// router.post('/vehicle_register', cpUpload, async (req, res) => {
//     try {
//       // Extract data from the request
//       const { firstName, lastName } = req.body;
  
//       // Create a new user with the extracted data
//       const newUser = new Vehicle({
//         firstName: firstName,
//         lastName: lastName,
//         avatar: { data: req.files['avatar'][0].buffer, contentType: req.files['avatar'][0].mimetype },
//       });
  
//       // Save the user to the database
//       await newUser.save();
  
//       res.status(201).json({ message: 'Cool profile created successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   });



// module.exports = router
