// const router = require('express').Router()
// const express = require('express')
// const Vehicle = require('../model/Vehicle.js')
// const Driver = require('../model/Driver.js')
// const PdfSchema = require("../model/pdfDetails.js");
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')
// const fs = require("fs");
// const multer = require("multer");

// router.use("/files", express.static("files"));

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./files");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// router.post("/upload-files", upload.single("file"), async (req, res) => {
//   console.log(req.file);
//   const title = req.body.title;
//   const fileName = req.file.filename;
//   try {
//     await PdfSchema.create({ title: title, pdf: fileName });
//     res.send({ status: "ok" });
//   } catch (error) {
//     res.json({ status: error });
//   }
// });

// router.get("/get-files", async (req, res) => {
//   try {
//     PdfSchema.find({}).then((data) => {
//       res.send({ status: "ok", data: data });
//     });
//   } catch (error) {}
// });


// router.get("/", async (req, res) => {
//   res.send("Success!!!!!!");
// });

// module.exports = router