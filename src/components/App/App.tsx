import React, {useEffect, useState} from 'react'

import Layout from '../Layout/Layout'
import MainPage from '../../pages/MainPage/MainPage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage'
import PopularPage from '../../pages/PopularPage/PopularPage'
import MovePage from '../../pages/MovePage/MovePage'


import AboutPage from '../../pages/About'


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
	// }, [])JsonData

	// Property 'slice' does not exist on type '{}'.


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

				</Routes>
			</Layout>


			


		</div>
	)
}

export default App