import localforage from 'localforage'

export const authCreateNewUser = async (name: string) => {
	const request = await localforage.setItem('auth', name)
	const response = await localforage.getItem('auth')
	return response
}

export const authCreateLocalforage = async (name: string) => {
	await localforage.setItem('auth', name)
}

export const authUserLocalforage = async () => {
	const request = await localforage.getItem('auth')
	console.log('authUser request ', request)
	if(request === null) return false
	if(request !== null) return request
}

export const authLogoutLocalforage = async () => {
	await localforage.removeItem('auth')
}