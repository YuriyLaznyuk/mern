import React from 'react';
import './button.scss';

const Button = (props: React.HTMLProps<HTMLInputElement>) => {
	return <input className='button' {...props} />;
};

export default Button;
