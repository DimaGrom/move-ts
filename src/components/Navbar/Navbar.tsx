import React, {useEffect, useState} from 'react'
import '../../css.css'
import './navbar.css'
import Delete from '../Delete/Delete'
import {NavLink, useNavigate} from 'react-router-dom'
import loginImg from '../../icons/signin.png'
import logout from '../../icons/logout.png'
import cornimg from '../../icons/corn.png'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useAction} from '../../hooks/useActions'

const Navbar = () => {
	const navigate = useNavigate()
	const {token, name} = useTypedSelector(state => state.auth)
	const {authLogout, authDeleete} = useAction()
	const [toggle, setToggle] = useState(false)
	const isActiveStyle = {opacity: '1'}
	const [deletActive, setDeletActive] = useState(false)

	const handleLogOut = () => {
		setToggle(false)
		authLogout()
		navigate('/')
	}

	const handleToggle = () => {
		setToggle(!toggle)
	}

	const oneLette = (a: any) => {
		const b = a.split(/\s+/).join('')
		return b[0]
	}

	return (
		<>
		<div className='Navbar text-ms'>
			<div className='container'>
				<div>

					<div className='Navbar__body flex space-between  align-center py-10'>

						<div className='Navbar__logo'>
							<img
								onClick={() => navigate('/')}
								style={{cursor: 'pointer'}}
								alt='logo'
								src={cornimg}
							/>
						</div>

						<div 
							onClick={handleToggle}
							className={`Navbar__burger${toggle ? ' active' : ''} cursor`} 
						>
							<span></span>
						</div>

						<div 
							className={`Navbar__menu ${toggle ? 'active' : ''}`}
							>				
							<div>
								<NavLink 
									onClick={() => setToggle(!toggle)}
									className='mx-5 text-ms cursor relative zind-5 text-white' to='/'
									style={({isActive}) => isActive ? isActiveStyle : undefined}
								>
									Главная
								</NavLink>
							</div>
							{
								token && (
									<div className='mx-5 cursor relative zind-5 text-white'>
										<NavLink 
											onClick={() => setToggle(!toggle)}
											className='mx-5 text-ms cursor relative zind-5 text-white' 
											to='/my_film'
											style={({isActive}) => isActive ? isActiveStyle : undefined}
										>
											Мои
										</NavLink>
									</div>
								)
							}			
							<div className='mx-5 cursor relative zind-5 text-white'>
								<NavLink 
									onClick={() => setToggle(!toggle)}
									className='mx-5 text-ms cursor relative zind-5 text-white' 
									to='/popular'
									style={({isActive}) => isActive ? isActiveStyle : undefined}
								>
									Популярные
								</NavLink>
							</div>
						</div>

						<div className='zind-5 flex pl-20'>
							{
								(token)
									? (
										<>
											<button 
												onClick={() => setDeletActive(!deletActive)}
												className='Navbar__name'
												style={{color: 'white', marginRight: 20, textTransform: 'capitalize'}}
											>{oneLette(name)}</button>
											<button className='text-ms'>
												<img 
													onClick={handleLogOut}
													alt='Картинка'
													src={logout}
													className='cursor cursor hover-img'
												/>
											</button>
										</>
									) : (
										<NavLink 
											to='/login'
											onClick={() => setToggle(false)}
											className='text-ms relative zind-5' 
											>
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
		<Delete 
			active={deletActive} 
			changeActive={setDeletActive} 
		/>
		</>
	)
}

export default Navbar