const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pitcherSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    team: {
        type: String,
        required: true,
    },
    jerseyNo: {
        type: Number,
        required: true,
        min: 1,
    },
    throws: {
        type: String,
        enum: ['RHP', 'LHP'],
        required: true,
    },
    era: {
        type: Number,
        required: true,
    },
    wins: {
        type: Number,
        required: true,
        min: 0,
    },
    losses: {
        type: Number,
        required: true,
        min: 0,
    },
    birthdate: {
        type: Date,
        required: true,
    },
});


module.exports = mongoose.model('Pitcher', pitcherSchema);