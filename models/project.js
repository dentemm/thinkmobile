const mongoose = require('mongoose');
const { Schema } = mongoose;
const { imageSchema } = require('./image')


const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 40
  },
  description: {
    type: String,
    required: true,
    maxlength: 500
  },
  images: [imageSchema]
});


const Project  = mongoose.model('Project', projectSchema);

module.exports = { Project, projectSchema };
