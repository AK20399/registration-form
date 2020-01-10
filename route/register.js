const express = require('express');
const router = express.Router();
const Registration_model = require('../database/models/Registration_model');
const validateUserInput = require('../validation/validateUserInput');

router.get('/', (req, res) => {
	res.status(400).json({ error: 'Please Use Post Method' });
});

// ROUTE 	/register/
// METHOD 	POST
// ACCESS	public
router.post('/', (req, res) => {
	const { errors, isValid } = validateUserInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}
	Registration_model.findOne({
		email: req.body.email,
	}).then(data => {
		if (data) {
			errors.email = 'Registered Already';
			res.status(400).json(errors);
		} else {
			const newRegistration = new Registration_model({
				firstname: req.body.firstname,
				lastname: req.body.lastname,
				username: req.body.username,
				email: req.body.email,
				country: req.body.country,
				state: req.body.state,
				zip: req.body.zip,
				aadhar: req.body.aadhar,
			});

			newRegistration
				.save()
				.then(data => {
					res.json(data);
				})
				.catch(err => {
					console.log(err);
				});
		}
	});
});

module.exports = router;
