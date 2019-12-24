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
		email,
	}).then(data => {
		if (data) {
			errors.email = 'Register Already';
			res.status(400).json(errors);
		} else {
			const newRegistration = new Registration_model({
				name: req.body.name,
				email: req.body.email,
				number: req.body.number,
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
