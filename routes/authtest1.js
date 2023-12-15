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

// const cpUpload = upload.fields([{ name: 'profile_picture', maxCount: 1 }
// // { name: 'appearance_frontside', maxCount: 1 },
// // { name: 'appearance_backside', maxCount: 1 },
// // { name: 'vehicle_insurance', maxCount: 1 },
// // { name: 'vehicle_fitness', maxCount: 1 },
// // { name: 'registration_certificate', maxCount: 1 },
// ]);
// router.post('/vehicle_register', cpUpload, async (req, res) => {
//     try {
//         // Create a new user with the extracted data
//         const vehicle = new Vehicle({
//             firstname: req.body.firstname,
//             lastname: req.body.lastname,
//             // DOB: req.body.DOB,
//             // male: req.body.male,
//             // female: req.body.female,
//             // car: req.body.car,
//             // bike: req.body.bike,
//             // auto: req.body.auto,
//             // driver: req.body.driver,
//             // vehicle_detail: req.body.vehicle_detail,
//             // appearance: req.body.appearance,
//             // RC: req.body.RC,
//             // vehicle_insurance: req.body.vehicle_insurance,
//             // tax_permit: req.body.tax_permit,
//             // vehicle_fitness: req.body.vehicle_fitness,
//             profile_picture: { data: req.files['profile_picture'][0].buffer, contentType: req.files['profile_picture'][0].mimetype },
//             // appearance_frontside: { data: req.files['appearance_frontside'][0].buffer, contentType: req.files['appearance_frontside'][0].mimetype },
//             // appearance_backside: { data: req.files['appearance_backside'][0].buffer, contentType: req.files['appearance_backside'][0].mimetype },
//             // vehicle_insurance: { data: req.files['vehicle_insurance'][0].buffer, contentType: req.files['vehicle_insurance'][0].mimetype },
//             // vehicle_fitness: { data: req.files['vehicle_fitness'][0].buffer, contentType: req.files['vehicle_fitness'][0].mimetype },
//             // registration_certificate: { data: req.files['registration_certificate'][0].buffer, contentType: req.files['registration_certificate'][0].mimetype },
//         });

//         // Save the user to the database
//         await vehicle.save();

//         res.status(201).json({ message: 'Cool profile created successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// });



// module.exports = router
