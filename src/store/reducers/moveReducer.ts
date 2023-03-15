import {IMoveState, MoveActionTypes, MoveAction} from '../../types/move'

const initialState:IMoveState = {
	movies: [],
	move: null,
	myMovies : [],
	myMoveFilms: [],
	checkMyMovies: false,
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

		case MoveActionTypes.MY_MOVE_ADD:
		return {
			...state, loadig: false, error: null, myMovies: action.payload
		}

		case MoveActionTypes.MY_MOVE_DELETE:
		return {
			...state, loadig: false, error: null, myMovies: action.payload
		}

		case MoveActionTypes.MY_MOVE:
		return {
			...state, loadig: false, error: null, myMovies: action.payload
		}

		case MoveActionTypes.MY_MOVE_CHECK:
		return {
			...state, checkMyMovies: action.payload
		}
		// Заполняем массива избранных фильмов
		case MoveActionTypes.MY_MOVE_FILMS:
		return {
			...state, myMoveFilms: action.payload
		}
		// Удаляем фильм массива избранных фильмов по id
		case MoveActionTypes.MY_MOVE_FILMS_DELETE:
		return {
			...state, myMoveFilms: state.myMoveFilms.filter(f => f.id  !== action.payload)
		}

		default:
			return state
	}
}