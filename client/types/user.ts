export interface IUser {
	name: string;
	email: string;
	password: string;
}
export interface IUserState {
	user: IUser;
	login: boolean;
	isAuth: boolean;
}

export enum UserTypeAction {
	USER_REGISTRATION = 'USER_REGISTRATION',
	USER_LOGIN = 'USER_LOGIN',
	USER_AUTH = 'USER_AUTH',
}

export type UserRegistration = {
	type: UserTypeAction.USER_REGISTRATION;
	payload: IUser;
};
export type UserLogin = {
	type: UserTypeAction.USER_LOGIN;
	payload: boolean;
};
export type UserAuth = {
	type: UserTypeAction.USER_AUTH;
	payload: boolean;
};

export type UserAction = UserAuth | UserLogin | UserRegistration;
