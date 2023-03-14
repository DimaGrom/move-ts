import localforage from 'localforage'

type Book = {
	name: string
} 

export const checkUserByName = async (name: string) => {
	const request: any = await localforage.getItem('users')
	if(request) {
		const response = await request?.find((f: Book) => f.name === name)
		return response
	}
}
	
export const createNewUser = async (params: any) => {
	const request: any = await localforage.getItem('users')
	if(request !== null) {
		await localforage.setItem('users', [...request, params])
	} 
	if(request === null) {
		await localforage.setItem('users', [params])
	}
}