import localforage from 'localforage'

//@ts-ignore
import uniqid from 'uniqid'
import dateNow from '../utils/dateTime'



export const commentLF = async (id: number) => {
	const request: any = await localforage.getItem('comments')	

	if(request === null) {
		return 0
	} 

	if(request !== null) {
		const coment: any = await request?.find((f: any) => f.commentAdress === id)

		console.log('Функция commentLF coment.comments ', coment.comments.length)
		const commentsCount = await coment.comments.length
		return commentsCount
	}

	return request
}


interface Icomments {
	authID: string;
	name: string;
	text: string;
	datecreate: number;
	datedate: string;
}


interface IComments {
	commentID: string;
	commentAdress: number;
	comments: [] | Icomments[];
}

export const createCommentLF = async (id: number, comment: string, token: string) => {
	const request: any = await localforage.getItem('comments')

	// Если комментов вообще нет создаём первый
	if(request === null) {

		const newComment = <IComments>{}

		newComment.commentID = uniqid()
		newComment.commentAdress = id

		newComment.comments = [{
			authID: token,
			name: token,
			text: comment,
			datecreate: Date.now(),
			datedate: dateNow(),
		}]

		await localforage.setItem('comments', [newComment])
		const respone = await localforage.getItem('comments')
		return await respone
	}

	if(request !== null) {

		const oldComment: any = await request.filter((f: any) => f.commentAdress !== id)
		const check: any = await request?.find((f: any) => f.commentAdress === id)

		if(check) {

			check.comments = [...check.comments, {
				authID: token,
				name: token,
				text: comment,
				datecreate: Date.now(),
				datedate: dateNow(),
			}]
			await localforage.setItem('comments', [...oldComment, check])
			const respone = await localforage.getItem('comments')
			return await respone
		} else {

			const newComment = <IComments>{}

			newComment.commentID = uniqid()
			newComment.commentAdress = id

			newComment.comments = [{
				authID: token,
				name: token,
				text: comment,
				datecreate: Date.now(),
				datedate: dateNow(),
			}]

			await localforage.setItem('comments', [...request, newComment])		
			const respone = await localforage.getItem('comments')
			return await respone	
		}
	}
}