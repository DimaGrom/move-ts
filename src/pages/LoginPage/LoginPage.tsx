import React, {useState, useEffect} from 'react'
import '../../css.css'
import './LoginPage.css'
import {useAction} from '../../hooks/useActions'
import {NavLink, useNavigate} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'

const LoginPage: React.FC = () => {
	const [value, setValue] = useState('')
	const navigate = useNavigate()

	const {authLogin, authStatuse} = useAction()
	const {loadig, id, name, success, status} = useTypedSelector(state => state.auth)

	useEffect(() => {
		if(success) navigate('/')
	}, [success])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		authStatuse()
	}

	const handleLogin= () => {
		authLogin(value)
	}

	if(loadig) {
		return <h1
			className='text-47ebdbe3 h-border text-32 my-50 py-20'
		>
			Идёт загрука пользователя
		</h1>
	}

	return (
		<div className='LoginPage'>

			<form
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault() }
			>	
				<h3>Авторизация</h3>
				<p>Имя</p>
				<input
					value={value}
					onChange={handleValue}
					type='text'
					placeholder='name...'
				/>
				<div className='LoginPage__a'>
					<button
						onClick={handleLogin}
					>Войти</button>
					<NavLink className='' to='/registration'>Регистрация
					</NavLink>
				</div>
				{
					status === 404 && (
						<h4>Неверный пароль или имя</h4>
					)
				}
			</form>
		</div>
	)
}

export default LoginPage