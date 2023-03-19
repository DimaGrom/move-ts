import localforage from 'localforage'

export const authCreateNewUser = async (name: string) => {
	const request = await localforage.setItem('auth', name)
	const response = await localforage.getItem('auth')
	return response
}

export const authCreateLocalforage = async (name: string) => {
	await localforage.setItem('auth', name)
}

export const authCreateTokenIDLF = async (id: string) => {
	await localforage.setItem('tokenId', id)
}

export const authUserLocalforage = async () => {
	const name = await localforage.getItem('auth')
	const tokenID = await localforage.getItem('tokenId')
	const request = {name, tokenID}
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
	await localforage.removeItem('tokenId')
}