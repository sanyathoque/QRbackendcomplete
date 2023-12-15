const mongoose = require("mongoose");

const PdfDetailsSchema = new mongoose.Schema({
  pdf: {
    type: String,
  },
  pdf2: {
    type: String,
  },
  title: {
    type: String,
  }
});

module.exports = mongoose.model("PdfDetails", PdfDetailsSchema);
