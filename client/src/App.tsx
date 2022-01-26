import React from 'react';
import './app.scss';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import Registration from './pages/Registration/Registration';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

const App = () => {
	return (
		<>
			<div className='app'>
				<Navbar />
			</div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/authorization' element={<Login />} />
			</Routes>
		</>
	);
};

export default App;
