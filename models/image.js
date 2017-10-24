const mongoose = require('mongoose');
const { Schema } = mongoose;

const imageSchema = new Schema({
  url: {
    type: String,
    required: true,
    maxlength: 200
  },
  description: {
    type: String,
    required: false,
    maxlength: 200
  },
});


const Image  = mongoose.model('Image', imageSchema);

module.exports = { Image, imageSchema };
