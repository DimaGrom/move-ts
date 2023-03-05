

interface IDescriptions {
	content: string;
}

interface IComments {
	authName: string;
	aythID: string;
	comment: string;
}

interface IMove {
	id: number;
	like?: number;
	src?: string;
	title?: string;
	descriptions?: IDescriptions[] | any[];
	comments?: IComments[] | any[];
}

export interface IMoveState {
	movies: IMove[] | any[];
	loadig: boolean;
	error: string | null;
	success: boolean;
	movePages: number;
}

export enum MoveActionTypes {
	MOVE = 'MOVE',
	MOVE_SUCCESS = 'MOVE_SUCCESS',
	MOVE_ERROR = 'MOVE_ERROR',
}

interface MoveStartAction {
	type: MoveActionTypes.MOVE;
}

interface MoveSuccessAction {
	type: MoveActionTypes.MOVE_SUCCESS;
	payload: any[]
}

interface MoveErrorAction {
	type: MoveActionTypes.MOVE_ERROR;
	payload: string;
}

export type MoveAction = 
	MoveStartAction |
	MoveSuccessAction |
	MoveErrorAction 

