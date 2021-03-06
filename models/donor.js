const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const donorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    qty: {
        type:Number,
        required: true
    }
});

module.exports = mongoose.model('Donor', donorSchema);


// name
// qty
// if delivery  then Address
// phone

