// const router = require('express').Router();
// const express = require('express');
// const PdfDetails = require('../model/pdfDetails.js');
// const multer = require('multer');

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

// const upload = multer({ storage: storage }).array('files', 1);

// router.post('/upload-files', async (req, res) => {
//   console.log('FILES RECEIVE1 ===>', req.files);
//   upload(req, res, async function (err) {
//     if (err) {
//       return res.status(500).json({ message: 'Error uploading files' });
//     }
    
//     const filenames = req.files.map((file) => {
//       console.log('FILES RECEIVE3 ===>', file);
//       file.originalname
//     });
//     console.log('FILES RECEIVE3 ===>', filenames);
//     try {
//       await PdfDetails.create({
//         title: req.body.title, // Assuming you are sending the title in the request body
//         pdf1: filenames[0],
//         // pdf2: filenames[0],
//       });
//       res.send({ status: 'ok' });
//     } catch (error) {
//       res.json({ status: error.message });
//     }
//   });
// });

// router.get("/get-files", async (req, res) => {
//   try {
//     PdfDetails.find({}).then((data) => {
//       res.send({ status: "ok", data: data });
//     });
//   } catch (error) {
//     res.status(500).json({ status: 'error', message: error.message });
//   }
// });

// router.get("/", async (req, res) => {
//   res.send("Success!!!!!!");
// });

// module.exports = router;
