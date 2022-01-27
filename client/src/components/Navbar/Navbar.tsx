import React from 'react';
import Disk from '../../../public/img/Component 1.svg';
import './navbar.scss';
import {Link} from 'react-router-dom';

const Navbar = () => {
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
					<Link to='/authorization'>login</Link>
				</div>
				<div className='navbar__service-reg'>
					<Link to='/registration'>registration</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
