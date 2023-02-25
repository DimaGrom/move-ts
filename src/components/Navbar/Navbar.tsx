import React, {useEffect, useState} from 'react'
import '../../css.css'
import './navbar.css'
import {NavLink} from 'react-router-dom'
import loginImg from '../../icons/signin.png'
import logout from '../../icons/logout.png'
import cornimg from '../../icons/corn.png'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useAction} from '../../hooks/useActions'

const Navbar = () => {
	const {token} = useTypedSelector(state => state.auth)
	const {authLogout} = useAction()
	const [toggle, setToggle] = useState(false)

	const handleToggle = () => {
		setToggle(!toggle)
		console.log(toggle)
	}

	return (
		<div className='Navbar text-ms'>
			<div className='container'>
				<div>

					<div className='Navbar__body flex space-between  align-center py-10'>

						<div className='Navbar__logo'>
							<img
								alt='logo'
								src={cornimg}
							/>
						</div>

						<div 
							onClick={handleToggle}
							className={`Navbar__burger${toggle ? ' active' : ''}`} 
						>
							<span></span>
						</div>

						<div 
							className={`Navbar__menu ${toggle ? 'active' : ''}`}
							>				
							<div>
								<NavLink 
									onClick={() => setToggle(!toggle)}
									className='mx-5 text-ms cursor relative zind-5 text-white' to='/'>Главная
								</NavLink>
							</div>
							<div className='mx-5 cursor relative zind-5 text-white'>
								<NavLink 
									onClick={() => setToggle(!toggle)}
									className='mx-5 text-ms cursor relative zind-5 text-white' to='/'>Популярные
								</NavLink>
							</div>
							<div className='mx-5 cursor relative zind-5 text-white'>
								<NavLink 
									onClick={() => setToggle(!toggle)}
									className='mx-5 text-ms cursor relative zind-5 text-white' to='/'>Мои
								</NavLink>
							</div>
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
										<NavLink className='text-ms relative zind-5' to='/login'>
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