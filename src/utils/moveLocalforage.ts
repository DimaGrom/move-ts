import localforage from 'localforage'

export const myMoveArraAdd = async (id: number, token: string) => {

	const oldMoveArray: any = await localforage.getItem('users')
	// console.log('oldMoveArray', oldMoveArray)

		if(token) {
			const newMoveArray = await oldMoveArray.filter((f: any)=> f.name !== token)
		// console.log('newMoveArray', newMoveArray)

		const auth = await oldMoveArray.find((f:any) => f.name === token)
		// console.log('auth', auth)

		// Добавляем id фильма из массив избранных фильмов пользователя
		const check = auth.likeMoves.includes(id)
		if(check) {
			await localforage.setItem('users', oldMoveArray)
			console.log('АЙДИ СУЩЕСТВУЕТ')
			return auth.likeMoves
		}

		auth.likeMoves = [...auth.likeMoves, id]

		await localforage.setItem('users', [...newMoveArray, auth])

		// Получаем новый список пользователей
		const request: any = await localforage.getItem('users')

		const response = await request.find((f:any) => f.name === token)

		return response.likeMoves
		}
} 

export const myMoveArraDellete= async (id: number, token: string) => {

	const oldMoveArray: any = await localforage.getItem('users')
	const newMoveArray = await oldMoveArray.filter((f: any)=> f.name !== token)
	const auth = await oldMoveArray.find((f:any) => f.name === token)

	const check = auth.likeMoves.includes(id)
	if(!check) {
		await localforage.setItem('users', oldMoveArray)
		console.log('АЙДИ НЕСУЩЕСТВУЕТ')
		return auth.likeMoves
	}

	// Удаляем id фильма из массив избранных фильмов пользователя
	auth.likeMoves = auth.likeMoves.filter((f: number) => f !== id)
	await localforage.setItem('users', [...newMoveArray, auth])
	return auth.likeMoves
	
} 

// Получаем массив фильмов фаворитов
export const myMoviesLF = async (id: number, token: string) => {
	const request: any = await localforage.getItem('users')
	if(token) {
		const user = await request.find((f:any) => f.name === token)
		return user.likeMoves	
	}		
}

// Получаем массив из id фильмов фаворитов
export const myMoviesCheckLF = async (id: number, token: string) => {
	const request: any = await localforage.getItem('users')

	if(token) {
		const user = await request.find((f:any) => f.name === token)
		const check = await user.likeMoves.includes(id)
		return check	
	}
}
	
// 	Получаем массив избранных фильмо
export const myMoveFilmsLF = async (moves: any[], token: string) => {

	const users: any = await localforage.getItem('users')

	const user = await users.find((f:any) => f.name === token)

	if(moves) {
		const myMoveFilms: any = moves.filter((f: any) => user.likeMoves.includes(f.id) )

		return myMoveFilms
	}

	
}	