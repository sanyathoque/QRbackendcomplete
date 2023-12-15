const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
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
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    DOB: {
        type: String,
    },  
    male: {
        type: String,
        default: false,
    },
    female: {
        type: String,
        default: false,
    },
    car: {
        type: String,
        default: false,
    },
    bike: {
        type: String,
        default: false,
    },
    auto: {
        type: String,
        default: false,
    },
    driver: {
        type: String,
        default: false,
    },
    vehicle_detail: {
        type: String,
    },
    appearance: {
        type: String,
    },
    RC: {
        type: String,
    },
    vehicle_insurance: {
        type: String,
    },
    tax_permit: {
        type: String,
    },
    vehicle_fitness: {
        type: String,
    },
    profile_picture: {
        type: String,
        required: false,
    },
    appearance_frontside: {
        type: String,
        required: false,
    },
    appearance_backside: {
        type: String,
        required: false,
    },
    vehicle_insurance_pic: {
        type: String,
        required: false,
    },
    vehicle_fitness_pic: {
        type: String,
        required: false,
    },
    registration_certificate: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Vehicle', vehicleSchema)
