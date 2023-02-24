import React, {useEffect, useState} from 'react'
import '../../css.css'
import './navbar.css'
import {NavLink} from 'react-router-dom'
import loginImg from '../../icons/signin.png'
import logout from '../../icons/logout.png'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useAction} from '../../hooks/useActions'

const Navbar = () => {
	const {token} = useTypedSelector(state => state.auth)
	const {authLogout} = useAction()

	return (
		<div className='Navbar text-ms'>
			<div className='container'>
				<div>

					<div className='flex space-between  align-center py-10'>

						<div>
							Avatar
						</div>

						<div className='flex align-center'>
							<div>
								<NavLink className='mx-5 text-ms cursor hover' to='/'>Главная</NavLink>
							</div>
							<div className='mx-5 cursor hover'>Популярные</div>
							<div className='mx-5 cursor hover'>Мои</div>
						</div>

						<div>
							{
								(token)
									? (
										<button className='text-ms'>
											<img 
												onClick={authLogout}
												alt='Картинка'
												src={logout}
												className='cursor cursor hover-img'
											/>
										</button>
									) : (
										<NavLink className='text-ms' to='/login'>
											<img 
												alt='Картинка'
												src={loginImg}
												className='cursor cursor hover-img'
											/>
										</NavLink>
									)
							}
										
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar