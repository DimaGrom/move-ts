import {AuthActionTypes, AuthAction, AuthUser} from '../../types/auth'

const initialState: AuthUser = {
	id: null,
	name: '',
	likeMoves: [],
	loadig: false,
	error: null,
	status: null,
	success: false,
	token: null,
}

export const authReducer = (state=initialState, action: AuthAction): AuthUser => {

	switch (action.type) {
		
		case AuthActionTypes.AUTH_ME:
			return {
				...state, loadig: false, error: null, name: action.paylod, success: true, token: action.paylod
			}

		case AuthActionTypes.AUTH_REGISTER:
			return {
				...state, loadig: true
			}

		case AuthActionTypes.AUTH_REGISTER_SUCCESS:
			return {
				...state, loadig: false,  name: action.paylod, success: true, token: action.paylod
			}

		case AuthActionTypes.AUTH_ERROR:
			return {
				...state, loadig: false, error: action.paylod
			}

		case AuthActionTypes.AUTH_STATUS:
			return {
				...state, loadig: false, status: action.paylod
			}

		case AuthActionTypes.AUTH_LOGIN:
			return {
				...state, loadig: true
			}

		case AuthActionTypes.AUTH_LOGIN_SUCCESS:
			return {
				...state, loadig: false, id: action.paylod.id, name: action.paylod.name, success: true, token: action.paylod.name
			}

		case AuthActionTypes.AUTH_LOGIN_ERROR:
			return {
				...state, loadig: false, error: action.paylod
			}

		case AuthActionTypes.AUTH_LOGOUT:
			return {
				...state, loadig: false, token: null, success: false,
			}

		case AuthActionTypes.AUTH_DELEETE:
			return {
				...state, loadig: false, token: null, success: false,
			}

		default:
			return state
	}
}