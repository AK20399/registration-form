// DB COnfig
const mongoose = require('mongoose');
const db = require('./config/keys.js').mongoURI;

const connectDB = async () =>
	mongoose
		.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log('MongoDb Connected'))
		.catch(err => console.log(`Error ${err}`));

module.exports = connectDB;
