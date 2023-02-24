export interface UserState {
	users: any[];
	user: {
		id: number;
		name: string;
	}
	loading: boolean;
	error: null | string
}

export enum UserActionTypes {
	All_USERS = 'All_USERS',
	ONE_USER = 'ONE_USER'
}

interface AllUsersAction {
	type: UserActionTypes.All_USERS
}

interface OneUserAction {
	type: UserActionTypes.ONE_USER
	paylod: any
}

export type UsersAction = AllUsersAction | OneUserAction