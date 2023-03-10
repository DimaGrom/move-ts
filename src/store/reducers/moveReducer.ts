import {IMoveState, MoveActionTypes, MoveAction} from '../../types/move'

const initialState:IMoveState = {
	movies: [],
	move: null,
	loadig: false,
	error: null,
	success: false,
	movePages: 6,
}

export const moveReducer = (state=initialState, action:MoveAction): IMoveState => {
	switch (action.type) {

		case MoveActionTypes.MOVE:
			return {
				...state, loadig: true, error: null
			}

		case MoveActionTypes.MOVE_SUCCESS:
			return {
				...state, loadig: false, error: null, movies: action.payload
			}

		case MoveActionTypes.MOVE_ERROR:
			return {
				...state, loadig: false, error: action.payload
			}

		case MoveActionTypes.MOVE_BY_ID:
			return {
				...state, loadig: false, error: null, move: state.movies.filter(f => f.id === action.payload)[0]
			}

		default:
			return state
	}
}