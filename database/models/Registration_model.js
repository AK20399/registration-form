const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Registration_schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	number: {
		type: Number,
		required: true,
	},
});

module.exports = Registration_model = mongoose.model(
	'Registrations',
	Registration_schema,
);
