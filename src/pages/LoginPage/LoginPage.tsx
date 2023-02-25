import React, {useState, useEffect} from 'react'
import '../../css.css'
import {useAction} from '../../hooks/useActions'
import {NavLink, useNavigate} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'

const LoginPage: React.FC = () => {
	const [value, setValue] = useState('')
	const navigate = useNavigate()

	const {authLogin, authStatuse} = useAction()
	const {loadig, id, name, success, status} = useTypedSelector(state => state.auth)

	console.log('LoginPage status', status)

	// useEffect(() => {
	// 	localforage.removeItem('users')
	// }, [])

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
			<h3>LoginPage</h3>
			<form
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault() }
			>
				<p>Введите Ваше имя</p>
				<input
					value={value}
					onChange={handleValue}
					type='text'
					placeholder='name...'
					style={{
				    border: 'solid grey 1px',
						padding: '4px 10px'
					}}
				/>
				<button
					onClick={handleLogin}
					style={{
						background: 'cyan',
				    padding: '5px 100px',
				    marginLeft: '10px',
					}}
				>Войти</button>
				<div>
					<NavLink className='' to='/registration'>Регистрация</NavLink>
				</div>
			</form>
			{
				status === 404 && (
					<h3 className='red'>Неверный пароль или имя</h3>
				)
			}
		</div>
	)
}

export default LoginPage