import React, {useEffect} from 'react';
import './app.scss';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import Registration from './pages/Registration/Registration';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import {useSelector} from 'react-redux';
import {RootState} from './store/reducer';
import {useAction} from './hooks/useAction';

const App = () => {
	const {isAuth} = useSelector((state: RootState) => state.user);
	const {authUser} = useAction();
	useEffect(() => {
		if (localStorage.getItem('token')) {
			authUser();
		}
	}, []);
	return (
		<>
			<div className='app'>
				<Navbar />
			</div>
			<Routes>
				<Route path='/' element={<Home />} />
				{!isAuth && <Route path='/registration' element={<Registration />} />}
				{!isAuth && <Route path='/authorization' element={<Login />} />}
			</Routes>
		</>
	);
};

export default App;
