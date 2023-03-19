export interface AuthUser {
	id: string | null;
	name: string;
	likeMoves: [];
	loadig: boolean;
	error: null | string;
	status: null | number;
	success: boolean;
	token: string | null;
	tokenID: string | null;
}

export enum AuthActionTypes {
	AUTH_ERROR = 'AUTH_ERROR',
	AUTH_STATUS = 'AUTH_STATUS',
	AUTH_REGISTER = 'AUTH_REGISTER',
	AUTH_REGISTER_SUCCESS = 'AUTH_CREATE_SUCCESS',
	AUTH_LOGIN = 'AUTH_LOGIN',
	AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS',
	AUTH_LOGIN_ERROR = 'AUTH_LOGIN_ERROR',
	AUTH_ME = 'AUTH_ME',
	AUTH_LOGOUT = 'AUTH_LOGOUT',
	AUTH_DELEETE = 'AUTH_DELEETE',
}

interface createNewUserErrorAction {
	type: AuthActionTypes.AUTH_ERROR;
	payload: string;
} 

interface AuthStatus {
	type: AuthActionTypes.AUTH_STATUS;
	payload: number | null;
}

interface AuthRegister {
	type: AuthActionTypes.AUTH_REGISTER;
}

interface AuthCreateSuccessAction {
	type: AuthActionTypes.AUTH_REGISTER_SUCCESS;
	payload: {
		name: string,
		tokenID: string
	};
}

interface AuthLoginAction {
	type: AuthActionTypes.AUTH_LOGIN;
}

interface AuthLoginSuccessAction {
	type: AuthActionTypes.AUTH_LOGIN_SUCCESS;
	payload: {name: string, id: string}
}

interface AuthLoginErrorAction {
	type: AuthActionTypes.AUTH_LOGIN_ERROR;
	payload: string
}

interface authMeAction {
	type: AuthActionTypes.AUTH_ME;
	payload: {
		name: string,
		tokenID: string
	};
}

interface authLogoutAction {
	type: AuthActionTypes.AUTH_LOGOUT;
}

interface authDeleeteAction {
	type: AuthActionTypes.AUTH_DELEETE;
}

export type AuthAction = 
	AuthStatus |
	authMeAction |
	createNewUserErrorAction |
	AuthRegister |
	AuthCreateSuccessAction |
	AuthLoginAction |
	AuthLoginSuccessAction |
	AuthLoginErrorAction |
	authLogoutAction |
	authDeleeteAction