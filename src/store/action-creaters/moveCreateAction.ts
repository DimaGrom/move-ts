import {MoveActionTypes, MoveAction} from '../../types/move'
import {Dispatch} from 'redux'

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
			}, 1000)
		} catch(e) {
			dispatch({
				type: MoveActionTypes.MOVE_ERROR,
				payload: 'Ошибка загрузки...'
			})
		}
	}
}