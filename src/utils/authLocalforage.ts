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
	// console.log('authUserLocalforage request ', request)
	return request
}

export const authLogoutLocalforage = async () => {
	await localforage.removeItem('auth')
}

export const authDeleeteLF = async (token: string) => {
	const users: any = await localforage.getItem('users')
	const newUsers = await users.filter((f: any) => f.name !== token)
	await localforage.setItem('users', newUsers)
	await localforage.removeItem('auth')
}