import {UserState, UserActionTypes, UsersAction} from '../../types/user'

const initialState: UserState = {
	users: [],
	user: {
		id: 0,
		name: ''
	},
	loading: false,
	error: null
}

export const userReducer = (state=initialState, action: UsersAction): UserState => {

	switch(action.type) {
		default:
			return state
	}
}