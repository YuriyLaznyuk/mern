export interface IUser {
	name: string;
	email: string;
	password: string;
}
export interface ILogin {
	email: string;
	password: string;
}
export interface IUserState {
	user: IUser;
	login: IResponse;
	isAuth: boolean;
}
export interface IResponse {
	id: string;
	email: string;
	diskSpace: number;
	usedSpace: number;
	avatar: string;
	name: string;
}

export enum UserTypeAction {
	USER_REGISTRATION = 'USER_REGISTRATION',
	USER_LOGIN = 'USER_LOGIN',
	USER_AUTH = 'USER_AUTH',
	USER_LOGOUT = 'USER_LOGOUT',
}

export type UserRegistration = {
	type: UserTypeAction.USER_REGISTRATION;
	payload: IUser;
};
export type UserLogin = {
	type: UserTypeAction.USER_LOGIN;
	payload: IResponse;
};
export type UserAuth = {
	type: UserTypeAction.USER_AUTH;
	payload: boolean;
};

export type UserLogout = {
	type: UserTypeAction.USER_LOGOUT;
	payload: {
		isAuth: boolean;
		login: IResponse;
	};
};

export type UserAction = UserAuth | UserLogin | UserRegistration | UserLogout;
