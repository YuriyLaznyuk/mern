import React from 'react';
import './input.scss';
interface IProps {
	setValue: (value: string) => void;
	value?: string;
	placeholder?: string;
	type: string;
}

const Input = (props: IProps) => {
	return (
		<input
			className='input'
			onChange={(e) => props.setValue(e.target.value)}
			value={props.value}
			type={props.type}
			placeholder={props.placeholder}
		/>
	);
};

export default Input;
