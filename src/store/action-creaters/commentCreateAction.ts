import {CommentAction, CommentActionTypes} from '../../types/commentType'
import {Dispatch} from 'redux'
import {
	commentLF,
	createCommentLF
} from '../../utils/commentLocalforage'
 


export const commentCA = (id: number) => {
	return async (dispatch: Dispatch<CommentAction>) => {
		const cooment = await commentLF(id)
		console.log('Функция commentCA cooment ', cooment)
		dispatch({
			type: CommentActionTypes.COMMEN_COUNT,
			payload: Number(cooment)
		})
	}
}

export const createCommentCA = (id: number, text: string, token: string) => {
	return async (dispatch: Dispatch<CommentAction>) => {
		try {


			const comments = await createCommentLF(id, text, token)

			console.log('Функция createCommentCA comments ', comments)
			
		} catch(e) {
			dispatch({
				type: CommentActionTypes.COMMENT_ERROR,
				payload: 'Ошибка в загрузки комментария'
			})
		}
	}
}