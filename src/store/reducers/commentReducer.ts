import {ICommentState, CommentAction, CommentActionTypes} from '../../types/commentType'


const initialState: ICommentState = {
	id: '',
	moveID: null,
	comments: [],
	commentsById: null,
	comment: null,
	commentCount: 0,
	error: null,
	success: false,
	checkCommens: false
}

export const commentReducer = (state=initialState, action:CommentAction): ICommentState  => {
	switch (action.type) {
		// Поулчение коментариев к фильму
		case CommentActionTypes.COMMENT_BY_ID_SUCCESS:
			return {
				...state, commentsById: action.payload
			}
		// Если комментариев к фильму нет
		case CommentActionTypes.COMMENT_BY_ID_SUCCESS_UNDEFINED:
			return {
				...state, commentsById: null, checkCommens: false
			}
		// Посчитывает кол-во коментариев к фильму
		case CommentActionTypes.COMMEN_COUNT:
			return {
				...state, commentCount: action.payload
			}
		// Для динамического изменения контента при добавлении или удалении комментариев
		case CommentActionTypes.COMMENT_CREATE:
			return {
				...state, checkCommens: !state.checkCommens
			}

		default:
			return state
	}
}