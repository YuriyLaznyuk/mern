import {
	ILogin,
	IResponse,
	IUser,
	UserAction,
	UserTypeAction,
} from '../../../types/user';
import {Dispatch} from 'redux';

const host: string = window.location.origin;
const host1 = 'http://localhost:7583';
const url = host === 'http://localhost:5504' ? host1 : host;
export const registrationUser = async (user: IUser) => {
	try {
		const response = await fetch(`${url}/api/user/registration`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json; charset=utf-8'},
			body: JSON.stringify(user),
		});
		const json = await response.json();
		alert(json.message);
	} catch (e) {
		alert((e as Error).message);
	}
};

export const loginUser =
	(login: ILogin, redirect: () => void) =>
	async (dispatch: Dispatch<UserAction>) => {
		try {
			const response = await fetch(`${url}/api/user/login`, {
				method: 'POST',
				headers: {'Content-Type': 'application/json; charset=utf-8'},
				body: JSON.stringify(login),
			});
			const json = await response.json();
			alert(json.message);
			if (json.message === 'success') {
				localStorage.setItem('token', json.token);
				dispatch({type: UserTypeAction.USER_LOGIN, payload: json.user});
				dispatch({type: UserTypeAction.USER_AUTH, payload: true});
				redirect();
			}
		} catch (e) {
			alert((e as Error).message);
		}
	};

export const logout = () => async (dispatch: Dispatch<UserAction>) => {
	localStorage.removeItem('token');
	dispatch({
		type: UserTypeAction.USER_LOGOUT,
		payload: {login: {} as IResponse, isAuth: false},
	});
};
