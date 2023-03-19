interface Icomments {
	auth: string;
	authID: string;
	name: string;
	text: string;
	datecreate: number;
	datedate: string;
}

interface IComment {
	commentAdress: number,
	commentID: string,
	comments: [] | Icomments[]
}

export interface ICommentState {
	id: string;
	moveID: number | null;
	comments: [] | Icomments[];
	commentsById: null | IComment,
	comment: Icomments | null;
	commentCount: number;
	error: string | null;
	success: boolean;
	checkCommens: boolean;
}

export enum CommentActionTypes {
	COMMENT_SUCCESS ='COMMENT_SUCCESS',
	COMMENT_ERROR = 'COMMENT_ERROR',
	COMMEN_COUNT = 'COMMEN_COUNT',
	COMMENT_CREATE = 'COMMENT_CREATE',
	COMMENT_BY_ID_SUCCESS = 'COMMENT_BY_ID_SUCCESS',
	COMMENT_BY_ID_SUCCESS_UNDEFINED = 'COMMENT_BY_ID_SUCCESS_UNDEFINED',
}

interface CommentSuccessAction {
	type: CommentActionTypes.COMMENT_SUCCESS
}

interface CommentByIdSuccessAction {
	type: CommentActionTypes.COMMENT_BY_ID_SUCCESS,
	payload: IComment
}

interface CommentByIdSuccessUndefinedAction {
	type: CommentActionTypes.COMMENT_BY_ID_SUCCESS_UNDEFINED
}

interface CommentErrorAction {
	type: CommentActionTypes.COMMENT_ERROR,
	payload: string
}

interface CommentCountAction {
	type: CommentActionTypes.COMMEN_COUNT,
	payload: number
}

interface CommentCreeteAction {
	type: CommentActionTypes.COMMENT_CREATE,
}

export type CommentAction = 
	CommentSuccessAction |
	CommentByIdSuccessAction |
	CommentByIdSuccessUndefinedAction |
	CommentErrorAction |
	CommentCountAction |
	CommentCreeteAction 