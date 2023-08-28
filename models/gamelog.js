const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameLogSchema = new Schema({
    pitcher: {
      type: Schema.Types.ObjectId,
      ref: 'Pitcher',
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    opponent: {
      type: String,
      required: true,
    },
    outcome: {
      type: String,
      enum: ['Win', 'Loss', 'No Decision'],
      required: true,
    },
    era: {
      type: Number,
    },
  });
  
  module.exports = mongoose.model('GameLog', gameLogSchema);
  
  
  
  
  