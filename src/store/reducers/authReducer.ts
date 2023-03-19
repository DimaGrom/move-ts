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
	tokenID: null,
}

export const authReducer = (state=initialState, action: AuthAction): AuthUser => {

	switch (action.type) {
		
		case AuthActionTypes.AUTH_ME:
			return {
				...state, loadig: false, error: null, name: action.payload.name, success: false, token: action.payload.name, tokenID: action.payload.tokenID
			}

		case AuthActionTypes.AUTH_REGISTER:
			return {
				...state, loadig: true
			}

		case AuthActionTypes.AUTH_REGISTER_SUCCESS:
			return {
				...state, loadig: false,  name: action.payload.name, success: true, token: action.payload.name, tokenID: action.payload.tokenID
			}

		case AuthActionTypes.AUTH_ERROR:
			return {
				...state, loadig: false, error: action.payload
			}

		case AuthActionTypes.AUTH_STATUS:
			return {
				...state, loadig: false, status: action.payload
			}

		case AuthActionTypes.AUTH_LOGIN:
			return {
				...state, loadig: true
			}

		case AuthActionTypes.AUTH_LOGIN_SUCCESS:
			return {
				...state, loadig: false, id: action.payload.id, name: action.payload.name, success: true, token: action.payload.name, tokenID: action.payload.id
			}

		case AuthActionTypes.AUTH_LOGIN_ERROR:
			return {
				...state, loadig: false, error: action.payload
			}

		case AuthActionTypes.AUTH_LOGOUT:
			return {
				...state, loadig: false, token: null, success: false, tokenID: null
			}

		case AuthActionTypes.AUTH_DELEETE:
			return {
				...state, loadig: false, token: null, success: false, tokenID: null
			}

		default:
			return state
	}
}