import {CommentAction, CommentActionTypes} from '../../types/commentType'
import {Dispatch} from 'redux'
import {
	commentLF,
	createCommentLF,
	commentsByIdAllLF
} from '../../utils/commentLocalforage'
 

// CommentPage 
export const commentCA = (id: number) => {
	return async (dispatch: Dispatch<CommentAction>) => {
		const cooment = await commentLF(id)
		dispatch({
			type: CommentActionTypes.COMMEN_COUNT,
			payload: Number(cooment)
		})
		return cooment
	}
}

export const commentAllCA = (id: number) => {
	return async () => {
		const request = await commentLF(id)
		const respons = await request
		return await request
	}
}

export const createCommentCA = (id: number, text: string, token: string, tokenID: string) => {
	return async (dispatch: Dispatch<CommentAction>) => {
		try {

			await createCommentLF(id, text, token, tokenID)

			dispatch({
				type: CommentActionTypes.COMMENT_CREATE
			})
		} catch(e) {
			dispatch({
				type: CommentActionTypes.COMMENT_ERROR,
				payload: 'Ошибка в загрузки комментария'
			})
		}
	}
}

// CommentPage 
export const commentsByIdAllCA = (id: number) => {
	return async (dispatch: Dispatch<CommentAction>) => {
		const comment: any = await commentsByIdAllLF(id)
		if(comment !== undefined) {
			dispatch({
				type: CommentActionTypes.COMMENT_BY_ID_SUCCESS,
				payload: comment
			})
		}
		if(comment === undefined) {
			dispatch({
				type: CommentActionTypes.COMMENT_BY_ID_SUCCESS_UNDEFINED,
			})
		}			
	}
}