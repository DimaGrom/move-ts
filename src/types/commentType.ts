interface Icomments {
	auth: string;
	name: string;
	text: string;
	datecreate: number;
	datedate: string;
}

export interface ICommentState {
	id: string;
	moveID: number | null;
	comments: [] | Icomments[];
	comment: Icomments | null;
	commentCount: number;
	error: string | null;
	success: boolean;
}

export enum CommentActionTypes {
	COMMENT_SUCCESS ='COMMENT_SUCCESS',
	COMMENT_ERROR = 'COMMENT_ERROR',
	COMMEN_COUNT = 'COMMEN_COUNT',
}

interface CommentSuccessAction {
	type: CommentActionTypes.COMMENT_SUCCESS
}

interface CommentErrorAction {
	type: CommentActionTypes.COMMENT_ERROR,
	payload: string
}

interface CommentCountAction {
	type: CommentActionTypes.COMMEN_COUNT,
	payload: number
}

export type CommentAction = 
	CommentSuccessAction |
	CommentErrorAction |
	CommentCountAction