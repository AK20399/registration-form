const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Registration_schema = new Schema({
	firstname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	zip: {
		type: Number,
		required: true,
	},
	aadhar: {
		type: Number,
		required: true,
	},
});

module.exports = Registration_model = mongoose.model(
	'Registrations',
	Registration_schema,
);
