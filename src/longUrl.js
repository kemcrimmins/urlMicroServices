const mongoose = require('mongoose');
mongoose.connect('/mongod://localhost:27017/longUrls');

const Schema = mongoose.Schema;

let urlSchema = new Schema({
  _id: Number,
  url: {type: String, required: true, unique: true}
});

module.exports = mongoose.model('Url', urlSchema);