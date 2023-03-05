import {combineReducers} from 'redux'
import {userReducer} from './userReducer'
import {authReducer} from './authReducer'
import {moveReducer} from './moveReducer'

export const rootReducer = combineReducers({
	auth: authReducer,
	users: userReducer,
	movies: moveReducer
})

export type RootState = ReturnType<typeof rootReducer>