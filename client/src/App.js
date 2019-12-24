import React from 'react';
import './App.css';

// React Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header/Header';
import RegistrationFrom from './components/registrationForm/RegistrationForm';
import Footer from './components/footer/Footer';

import './stylling/vendor/bootstrap/css/bootstrap.min.css';
import './stylling/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './stylling/fonts/iconic/css/material-design-iconic-font.min.css';
import './stylling/vendor/animate/animate.css';
import './stylling/vendor/css-hamburgers/hamburgers.min.css';
import './stylling/vendor/animsition/css/animsition.min.css';
import './stylling/vendor/select2/select2.min.css';
import './stylling/vendor/daterangepicker/daterangepicker.css';
import './stylling/vendor/noui/nouislider.min.css';
import './stylling/css/util.css';
import './stylling/css/main.css';

function App() {
	return (
		<Router>
			{/* Header */}
			<div className='App-header'>
				<Header className='App-header' />
			</div>

			{/* Registration */}
			<div className='container-contact100'>
				<div className='wrap-contact100'>
					<Route exact path='/' component={RegistrationFrom} />
					<Route exact path='/registration' />
				</div>
			</div>

			{/* Footer */}
			<div className='App-footer'>
				<Footer />
			</div>
		</Router>
	);
}
export default App;
