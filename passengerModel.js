// contactModel.js

var mongoose = require('mongoose');

// Setup schema
var passengerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
	type: Number,
	required: true
    },

    gender: String,

    email: {
    	type: String,
        required: true
    },

    phone_number: {
    	type: Number,
        required: true
    },

    birthdate: Number,

    occupation: String,

    nationality: String,

    native_language: {
    	type: String,
        required: true
    },

    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Contact model
var Passenger = module.exports = mongoose.model('passenger', passengerSchema);

module.exports.get = function (callback, limit) {
    Passenger.find(callback).limit(limit);
}