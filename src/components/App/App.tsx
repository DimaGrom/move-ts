import React, {useEffect, useState} from 'react'

import Layout from '../Layout/Layout'
import MainPage from '../../pages/MainPage/MainPage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage'
import PopularPage from '../../pages/PopularPage/PopularPage'
import MovePage from '../../pages/MovePage/MovePage'
import MyMovePageg from '../../pages/MyMovePageg/MyMovePageg'

import AboutPage from '../../pages/About'


import '../../css.css'

import {Routes, Route} from 'react-router-dom'
import {useAction} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'

import localforage from 'localforage'



const App: React.FC = () => {
	const {authMe} = useAction()
	const {token} = useTypedSelector(state => state.auth)

	localforage.getItem('users').then(users => {
		console.log('App: React.FC  users ', users)
	})

	const handleDeletUsers = () => {
		localforage.removeItem('users')
	}

	// useEffect(() => {
	// 	localforage.removeItem('auth')
	// 	localforage.removeItem('my_movies')
	// 	localforage.removeItem('users')
	// }, [])

	useEffect(() => {
		authMe()
	}, [token])

	return (
		<div>
			<Layout>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/registration' element={<RegistrationPage />} />
					<Route path='/popular' element={<PopularPage />} />


					<Route path=':id' element={<MovePage />} />


					<Route path='/about'>
						<Route index element={<AboutPage />} />
						<Route path=':number' element={<AboutPage />} />
					</Route>
					
					<Route path='/my_film' element={<MyMovePageg />} />

				</Routes>
			</Layout>


			<button 
				onClick={handleDeletUsers}
				style={{color: 'black', fontSize: 42}}
			>Удалить всех пользователей</button>


		</div>
	)
}

export default App