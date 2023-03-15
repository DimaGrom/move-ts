import {MoveActionTypes, MoveAction} from '../../types/move'
import {Dispatch} from 'redux'
import {
	myMoveArraAdd, 
	myMoveArraDellete, 
	myMoviesLF,
	myMoviesCheckLF,
	myMoveFilmsLF,
	myMoveFilmsDeleteByIdLF
} from '../../utils/moveLocalforage'

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

		dispatch({
			type: MoveActionTypes.MY_MOVE_CHECK,
			payload: check
		})
	}
}

// Заполняем массива избранных фильмов
// myMoveFilmsAC
export const myMoveFilmsAC = (move: any[], token: string) => {
	return async (dispatch: Dispatch<MoveAction>) => {
		const myMoveFilms = await myMoveFilmsLF(move, token)

		dispatch({
			type: MoveActionTypes.MY_MOVE_FILMS,
			payload: myMoveFilms
		})
	}
}

// Удаляем фильм массива избранных фильмов по id
// MoveItem 
export const myMoveFilmsDeleteByIdAC = (id: number, token: string) => {
	return async (dispatch: Dispatch<MoveAction>) => {
		// console.log('Функция myMoveFilmsDeleteByIDAC id ', id)
		await myMoveFilmsDeleteByIdLF(id, token)
		dispatch({
			type: MoveActionTypes.MY_MOVE_FILMS_DELETE,
			payload: id
		})
	}
}