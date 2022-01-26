import {IUser} from '../../../types/user';

// const host: string = window.location.origin;
const host1 = 'http://localhost:7583';
export const registrationUser = async (user: IUser) => {
	try {
		const response = await fetch(`${host1}/api/user/registration`, {
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
