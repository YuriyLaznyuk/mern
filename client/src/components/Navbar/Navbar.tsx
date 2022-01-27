import React from 'react';
import Disk from '../../../public/img/Component 1.svg';
import './navbar.scss';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducer';
import {useAction} from '../../hooks/useAction';

const Navbar = () => {
	const {login, isAuth} = useSelector((state: RootState) => state.user);
	const {logout} = useAction();
	return (
		<div className='navbar'>
			<div className='navbar__disk'>
				<div className='navbar__disk-svg'>
					<Link to='/'>
						<Disk />
					</Link>
				</div>
				<div className='navbar__disk-mern'>
					<Link to='/'>MERN CLOUD</Link>
				</div>
			</div>
			<div className='navbar__service'>
				<div className='navbar__service-log'>
					{!isAuth && <Link to='/authorization'>login</Link>}
				</div>
				<div className='navbar__service-reg'>
					{!isAuth && <Link to='/registration'>registration</Link>}
				</div>
				<div className='navbar__service-reg'>{login?.name}</div>
				{isAuth && (
					<div className='navbar__service-reg'>
						<span onClick={logout}>Logout</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
