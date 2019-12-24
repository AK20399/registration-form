import React, { Component } from 'react';

class RegistrationForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			number: '',
			errors: '',
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onSubmit(e) {
		e.preventDefault();
		const registrationData = {
			name: this.state.name,
			email: this.state.email,
			number: this.state.number,
		};
		console.log(registrationData);
	}

	render() {
		return (
			<form className='contact100-form validate-form' onSubmit={this.onSubmit}>
				<span className='contact100-form-title'>
					Registration For Upcoming Feature
				</span>

				<div
					className='wrap-input100 validate-input bg1'
					data-validate='Please Type Your Name'>
					<span className='label-input100'>FULL NAME *</span>
					<input
						className='input100'
						type='text'
						name='name'
						value={this.state.name}
						onChange={this.onChange}
						placeholder='Enter Your Name'
					/>
				</div>

				<div
					className='wrap-input100 validate-input bg1'
					data-validate='Enter Your Email (e@a.x)'>
					<span className='label-input100'>Email *</span>
					<input
						className='input100'
						type='text'
						name='email'
						value={this.state.email}
						onChange={this.onChange}
						placeholder='Enter Your Email '
					/>
				</div>

				<div className='wrap-input100 bg1'>
					<span className='label-input100'>Phone *</span>
					<input
						className='input100'
						type='text'
						name='number'
						value={this.state.number}
						onChange={this.onChange}
						placeholder='Enter Number Phone'
					/>
				</div>

				<div className='container-contact100-form-btn'>
					<button className='contact100-form-btn'>
						<span>
							Submit
							<i
								className='fa fa-long-arrow-right m-l-7'
								aria-hidden='true'></i>
						</span>
					</button>
				</div>
			</form>
		);
	}
}

export default RegistrationForm;
