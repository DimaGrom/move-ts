import {AuthAction, AuthActionTypes} from '../../types/auth'
import {Dispatch} from 'redux'
import {authUserLocalforage, authCreateLocalforage, authLogoutLocalforage} from '../../utils/authLocalforage'
import {checkUserByName, createNewUser} from '../../utils/userLocalforage'
const uniqid = require("uniqid") 

interface INewUser {
	id: number;
	name: string;
	likeMoves: number[];
}

// Проверяем пользователя на наличие в базе данных и если его нет добавляем в базу данных. 
export const authRegister = (name: string) => {
	return async (dispatch: Dispatch<AuthAction>) => {
		try {	
			const checkUser = await checkUserByName(name)
			// Проверяем на наличие 
			if(checkUser !== undefined) {
				dispatch({
					type: AuthActionTypes.AUTH_STATUS,
					paylod: 404
				})
			} else {
				dispatch({
					type: AuthActionTypes.AUTH_REGISTER
				})
				const newUser = <INewUser>{}
				newUser.id = uniqid()
				newUser.name = name
				newUser.likeMoves = []
				await createNewUser(newUser)
				setTimeout(() => {
					dispatch({
						type: AuthActionTypes.AUTH_REGISTER_SUCCESS,
						paylod: newUser.name
					})
				}, 500)
				await authCreateLocalforage(newUser.name)
			}
		} catch (e) {
			dispatch({
				type: AuthActionTypes.AUTH_ERROR,
				paylod: 'Ошибка при создаение новго пользователя'
			})
		}
	}
} 

// (LoginPage)
export const authLogin = (name: string) => {
	return async (dispatch: Dispatch<AuthAction>) => {
		try {
			const checkUser = await checkUserByName(name)
			if(checkUser === undefined) {
				dispatch({
					type: AuthActionTypes.AUTH_STATUS,
					paylod: 404
				})
			} else {
				dispatch({
					type: AuthActionTypes.AUTH_LOGIN
				})
				setTimeout(() => {
					dispatch({
						type: AuthActionTypes.AUTH_LOGIN_SUCCESS,
						paylod: {
							name: checkUser.name,
							id: checkUser.id
						}
					})
				}, 700)
				await authCreateLocalforage(name)
			}
		} catch(e) {
			dispatch({
				type: AuthActionTypes.AUTH_LOGIN_ERROR,
				paylod: 'Ошибка ввода имени или пароля.'
			})
		}
	}
}

// Проверяем на наличе для сохранения пользователя при перезагрузке
export const authMe = () => {
	return async (dispatch: Dispatch<AuthAction>) => {
		const user = await authUserLocalforage()
		// console.log('export const authMe user', user)
		try {
			if(user) {
				dispatch({
					type: AuthActionTypes.AUTH_ME,
					paylod: user
				})
			}	
		} catch (e) {
			dispatch({
				type: AuthActionTypes.AUTH_ERROR,
				paylod: 'Ошибка заргрузки пользователя'
			})
		}
	}
}

// Отмена статуса (RegistrationPage)
export const authStatuse = () => {
	return async (dispatch: Dispatch<AuthAction>) => {
		dispatch({
			type: AuthActionTypes.AUTH_STATUS,
			paylod: null
		})
	}
}

// Срабатывает при нажаети logout (NavBar|)
export const authLogout = () => {
	return async (dispatch: Dispatch<AuthAction>) => {
		await authLogoutLocalforage()
		dispatch({
			type: AuthActionTypes.AUTH_LOGOUT
		})
	}
}