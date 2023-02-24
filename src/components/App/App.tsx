import React, {useEffect} from 'react'

import Layout from '../Layout/Layout'
import MainPage from '../../pages/MainPage/MainPage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage'

import '../../css.css'

import {Routes, Route} from 'react-router-dom'
import {useAction} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'

import localforage from 'localforage'


const App: React.FC = () => {
	const {authMe} = useAction()
	const {token} = useTypedSelector(state => state.auth)

	// useEffect(() => {
	// 	localforage.removeItem('auth')
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
				</Routes>
			</Layout>
		</div>
	)
}

export default App