import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import './App.css';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	listCourses = [
		{ id: 1, name: 'ES6', credit: 60 },
		{ id: 2, name: 'Webpack', credit: 20 },
		{ id: 3, name: 'React', credit: 40 },
	];

	listNotifications = [
		{ id: 1, type: 'default', value: 'New course available' },
		{ id: 2, type: 'urgent', value: 'New resume available' },
		{ id: 3, type: 'urgent', html: getLatestNotification() },
	];

	handleKeyPress(e) {
		if (e.ctrlKey && e.key === 'h') {
			alert('Logging  you out');
			this.props.logOut();
		}
	}
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	compnonetWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	render() {
		return (
			<React.Fragment>
				<div className='App'>
					<div className='heading-section'>
						<Notifications listNotifications={this.listNotifications} />
						<Header />
					</div>
					{this.props.isLoggedIn ? (
						<CourseList listCourses={this.listCourses} />
					) : (
						<Login />
					)}
					<Footer />
				</div>
			</React.Fragment>
		);
	}
}

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => {
		return;
	},
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logOut: PropTypes.func,
};

export default App;