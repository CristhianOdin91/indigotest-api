const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({ 
	name: String,
	completed: { type: Boolean, default: false }
},{ timestamps: true });

module.exports = mongoose.model('Task',schema);