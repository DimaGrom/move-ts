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

		if(coment !== undefined) {
			const commentsCount = await coment.comments.length

			return commentsCount
		} 

		if (coment === undefined) {
			return 0
		}

	}
}

interface Icomments {
	auth: string;
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

export const createCommentLF = async (id: number, comment: string, token: string, tokenID: string) => {
	const request: any = await localforage.getItem('comments')

	// Если комментов вообще нет создаём первый
	if(request === null) {

		const newComment = <IComments>{}

		newComment.commentID = uniqid()
		newComment.commentAdress = id

		newComment.comments = [{
			auth: token,
			authID: tokenID,
			name: token,
			text: comment,
			datecreate: Date.now(),
			datedate: dateNow(),
		}]

		await localforage.setItem('comments', [newComment])
		await localforage.getItem('comments')
		// Нужно для толго что-бы остановить дальнейшее выполнеение
		return await true
	}

	if(request !== null) {

		const oldComment: any = await request.filter((f: any) => f.commentAdress !== id)
		const check: any = await request?.find((f: any) => f.commentAdress === id)

		if(check) {

			check.comments = [...check.comments, {
				auth: token,
				authID: tokenID,
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
				auth: token,
				authID: tokenID,
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

export const commentsByIdAllLF = async (id: number) => {
	const request: any = await localforage.getItem('comments')

	if(request === null) {
		return undefined
	}

	const respons: IComment[] = await request.find((f:any) => f.commentAdress === id)

	if(request === null) {
		return null
	}

	if(request !== null) {

		if(respons !== undefined)
		return respons

		if(respons !== undefined) {
			return null
		}
	}
}