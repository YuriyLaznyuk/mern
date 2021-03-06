import React, {useState} from 'react';
import Input from '../../utils/Input/Input';
import Button from '../../utils/Button/Button';
import '../Registration/registration.scss';
import {useAction} from '../../hooks/useAction';
import {useNavigate} from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {loginUser} = useAction();
	const navigate = useNavigate();
	return (
		<div className='registration'>
			<div className='registration__form'>
				<div className='registration__form-title'>authorization</div>
				<Input
					value={email}
					setValue={setEmail}
					type='text'
					placeholder='input email'
				/>
				<Input
					setValue={setPassword}
					value={password}
					type='text'
					placeholder='input password'
				/>
				<div className='registration__form-btn'>
					<Button
						onClick={() => loginUser({email, password}, () => navigate('/'))}
						type='button'
						value='SEND'
					/>
				</div>
			</div>
		</div>
	);
};

export default Login;
