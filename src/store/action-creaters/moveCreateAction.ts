import {MoveActionTypes, MoveAction} from '../../types/move'
import {Dispatch} from 'redux'
import {
	myMoveArraAdd, 
	myMoveArraDellete, 
	myMoviesLF,
	myMoviesCheckLF
} from '../../utils/moveLocalforage'

import {} from '../../utils/userLocalforage'

export const moveLoading = (params: any[]) => {
	return async (dispatch: Dispatch<MoveAction>) => {
		try {
			dispatch({
				type: MoveActionTypes.MOVE
			})
			setTimeout(() => {
				dispatch({
					type: MoveActionTypes.MOVE_SUCCESS,
					payload: params
				})
			}, 500)
		} catch(e) {
			dispatch({
				type: MoveActionTypes.MOVE_ERROR,
				payload: 'Ошибка загрузки...'
			})
		}
	}
}

export const moveById = (params: number) => {
	return async (dispatch: Dispatch<MoveAction>) => {
		try {
			dispatch({
				type: MoveActionTypes.MOVE_BY_ID,
				payload: params
			})
		} catch(e) {
			dispatch({
				type: MoveActionTypes.MOVE_ERROR,
				payload: 'Ошибка загрузки...'
			})
		}
	}
}

export const myMoveAddCreateAction = (params: number, token: string) => {
	return async (dispatch: Dispatch<MoveAction>) => {
		try {
			const myMoveArra = await myMoveArraAdd(params, token)

			dispatch({
				type: MoveActionTypes.MY_MOVE_ADD,
				payload: myMoveArra
			})
		} catch(e) {
			dispatch({
				type: MoveActionTypes.MOVE_ERROR,
				payload: 'Ошибка загрузки...'
			})
		}
	}
}

export const myMoveDeleteCA = (params: number, token: string) => {
	return async (dispatch: Dispatch<MoveAction>) => {
		try {
			const myMoveArra = await myMoveArraDellete(params, token)

			dispatch({
				type: MoveActionTypes.MY_MOVE_DELETE,
				payload: myMoveArra
			})
		} catch(e) {
			dispatch({
				type: MoveActionTypes.MOVE_ERROR,
				payload: 'Ошибка загрузки...'
			})
		}
	}
}

export const myMoveCA = (params: number, token: string) => {
	return async (dispatch: Dispatch<MoveAction>) => {

		const myMovies = await myMoviesLF(params, token)

		dispatch({
			type: MoveActionTypes.MY_MOVE,
			payload: myMovies
		})
	}
}

export const myMoveCheckCA = (params: number, token: string) => {
	return async (dispatch: Dispatch<MoveAction>) => {

		const check = await myMoviesCheckLF(params, token)

		// console.log('myMoveCheckCA params ', params)

		dispatch({
			type: MoveActionTypes.MY_MOVE_CHECK,
			payload: check
		})
	}
}