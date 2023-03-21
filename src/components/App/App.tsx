import React, {useEffect, useState} from 'react'

import Layout from '../Layout/Layout'
import MainPage from '../../pages/MainPage/MainPage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage'
import PopularPage from '../../pages/PopularPage/PopularPage'
import MovePage from '../../pages/MovePage/MovePage'
import MyMovePageg from '../../pages/MyMovePageg/MyMovePageg'
import CommentPage from '../../pages/CommentPage/CommentPage'

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

	localforage.getItem('comments').then(comments => {
		console.log('App: React.FC  comments ', comments)
	})

	const handleDeletUsers = () => {
		localforage.removeItem('users')
	}

	const handleDeletComments = () => {
		localforage.removeItem('comments')
	}

	// useEffect(() => {
	// 	localforage.removeItem('auth')
	// 	localforage.removeItem('my_movies')
	// 	localforage.removeItem('users')
	// 	localforage.removeItem('comments')
	// 	localforage.removeItem('tokenId')
	// }, [])

	useEffect(() => {
		authMe()
	}, [token])

	return (
		<div>
			<Layout>
				<Routes>
					<Route path=':id/comment' element={<CommentPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/' element={<MainPage />} />
					<Route path=':id' element={<MovePage />} />
					<Route path='/my_film' element={<MyMovePageg />} />
					<Route path='/popular' element={<PopularPage />} />
					<Route path='/registration' element={<RegistrationPage />} />
				</Routes>
			</Layout>



			<button 
				onClick={handleDeletUsers}
				style={{color: 'black', fontSize: 42}}
			>Удалить всех пользователей</button>

			<br />
			<button 
				onClick={handleDeletComments}
				style={{color: 'black', fontSize: 42}}
			>Удалить все комментарии</button>


		</div>
	)
}

export default App