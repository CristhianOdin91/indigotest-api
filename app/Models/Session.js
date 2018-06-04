const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({ tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }] });

module.exports = mongoose.model('Session',schema);