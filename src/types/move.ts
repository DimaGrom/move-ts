

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
	move: IMove | null;
	myMovies: number[]; 
	myMoveFilms: IMove[];
	checkMyMovies: boolean;
	loadig: boolean;
	error: string | null;
	success: boolean;
	movePages: number;
}

export enum MoveActionTypes {
	MOVE = 'MOVE',
	MOVE_SUCCESS = 'MOVE_SUCCESS',
	MOVE_ERROR = 'MOVE_ERROR',
	MOVE_BY_ID = 'MOVE_BY_ID',
	MY_MOVE_ADD = 'MY_MOVE_ADD',
	MY_MOVE_DELETE = 'MY_MOVE_DELETE',
	MY_MOVE = 'MY_MOVE',
	MY_MOVE_CHECK = 'MY_MOVE_CHECK',
	MY_MOVE_FILMS = 'MY_MOVE_FILMS',
	MY_MOVE_FILMS_DELETE = 'MY_MOVE_FILMS_DELETE',
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

interface MoveByIdAction {
	type: MoveActionTypes.MOVE_BY_ID;
	payload: number;
}

interface MyMoveAddAction {
	type: MoveActionTypes.MY_MOVE_ADD;
	payload: number[];
}

interface MyMoveDeleteAction {
	type: MoveActionTypes.MY_MOVE_DELETE;
	payload: number[];
}

interface MyMoveAction {
	type: MoveActionTypes.MY_MOVE;
	payload: number[];
}

interface MyMoveCheckAction {
	type: MoveActionTypes.MY_MOVE_CHECK;
	payload: boolean;
}

interface MyMoveFilmsAction {
	type: MoveActionTypes.MY_MOVE_FILMS;
	payload: IMove[];
}

interface MyMoveFilmsDeleteAction {
	type: MoveActionTypes.MY_MOVE_FILMS_DELETE;
	payload: number;
}

export type MoveAction = 
	MoveStartAction |
	MoveSuccessAction |
	MoveErrorAction |
	MoveByIdAction |
	MyMoveAddAction |
	MyMoveDeleteAction |
	MyMoveAction |
	MyMoveCheckAction |
	MyMoveFilmsAction |
	MyMoveFilmsDeleteAction