import {
	IResponse,
	IUser,
	IUserState,
	UserAction,
	UserTypeAction,
} from '../../../types/user';

const defaultState: IUserState = {
	user: {} as IUser,
	isAuth: false,
	login: {} as IResponse,
};
export const userReducer = (state = defaultState, action: UserAction) => {
	switch (action.type) {
		case UserTypeAction.USER_LOGIN:
			return {...state, login: action.payload};
		case UserTypeAction.USER_AUTH:
			return {...state, isAuth: action.payload};
		case UserTypeAction.USER_REGISTRATION:
			return {...state, user: action.payload};
		case UserTypeAction.USER_LOGOUT:
			return {
				...state,
				isAuth: action.payload.isAuth,
				login: action.payload.login,
			};
		default:
			return state;
	}
};
