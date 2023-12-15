const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    min: 2,
    max: 255,
  },
  phone_number: {
    type: Number,
  },
  OTP: {
    type: Number,
  },
  token: {
    type: String,
    min: 2,
    max: 255,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
