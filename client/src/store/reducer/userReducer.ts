import {
	IUser,
	IUserState,
	UserAction,
	UserTypeAction,
} from '../../../types/user';

const defaultState: IUserState = {
	user: {} as IUser,
	isAuth: false,
	login: false,
};
export const userReducer = (state = defaultState, action: UserAction) => {
	switch (action.type) {
		case UserTypeAction.USER_LOGIN:
			return {...state, login: action.payload};
		case UserTypeAction.USER_AUTH:
			return {...state, isAuth: action.payload};
		case UserTypeAction.USER_REGISTRATION:
			return {...state, user: action.payload};
		default:
			return state;
	}
};
