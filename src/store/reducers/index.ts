import {combineReducers} from 'redux'
import {userReducer} from './userReducer'
import {authReducer} from './authReducer'
import {moveReducer} from './moveReducer'
import {commentReducer} from './commentReducer'

export const rootReducer = combineReducers({
	auth: authReducer,
	users: userReducer,
	movies: moveReducer,
	comment: commentReducer
})

export type RootState = ReturnType<typeof rootReducer>