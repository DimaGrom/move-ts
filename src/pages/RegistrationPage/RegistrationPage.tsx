import React, {useState, useEffect} from 'react'
import '../../css.css'
import {NavLink, useNavigate} from 'react-router-dom'
import {useAction} from '../../hooks/useActions'
import localforage from 'localforage'
import {useTypedSelector} from '../../hooks/useTypedSelector'

const RegistrationPage: React.FC = () => {
	const {status, success, loadig} = useTypedSelector(state => state.auth)
	const [value, setValue] = useState('')
	const {authRegister, authStatuse} = useAction()
	const navigate = useNavigate()

	// useEffect(() => {
	// 	localforage.removeItem('users')
	// }, [])

	const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		authStatuse()
	}

	useEffect(() => {
		if(success) navigate('/')
	}, [success])

	const handleCreateNewUser = () => {
		authRegister(value)
	}

	if(loadig) {
		return <h1
			className='text-47ebdbe3 h-border text-32 my-50 py-20'
		>
			Орбатока запроса
		</h1>
	}

	return (
		<div>
			<h3>Регистрация</h3>
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
					onClick={handleCreateNewUser}
					style={{
						background: 'cyan',
				    padding: '5px 100px',
				    marginLeft: '10px',
					}}
				>Добавить</button>
				<div>
					<NavLink className='' to='/login'>Есть акаут?</NavLink>
				</div>
				{
					status === 404 && (
						<h3 className='red'>Данно имя занято</h3>
					)
				}
			</form>
		</div>
	)
}

export default RegistrationPage