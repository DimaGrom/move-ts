import {ICommentState, CommentAction, CommentActionTypes} from '../../types/commentType'


const initialState: ICommentState = {
	id: '',
	moveID: null,
	comments: [],
	comment: null,
	commentCount: 0,
	error: null,
	success: false,
}

export const commentReducer = (state=initialState, action:CommentAction): ICommentState  => {
	switch (action.type) {

		case CommentActionTypes.COMMEN_COUNT:
			return {
				...state, commentCount: action.payload
			}

		default:
			return state
	}
}