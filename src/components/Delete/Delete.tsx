import React, {useState} from 'react'
import '../../css.css'
import './Delete.css'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useAction} from '../../hooks/useActions'
import {useNavigate} from 'react-router-dom'
import closeImg from '../../icons/delete_2.png'

interface IDeletProps {
	active: boolean;
	changeActive: (params: boolean) => void;
}

const Delete: React.FC<IDeletProps> = (props) => {
	const {active, changeActive} = props 
	const {token} = useTypedSelector(state => state.auth)
	const {authDeleete} = useAction()
	const navigate = useNavigate()

	const handleDeleete = () => {
		if(token) {
			changeActive(false)
			navigate('/')
			authDeleete(token)
		}
	}

	return (
		<div className={`Delete ${active && 'active'}`}>
			<div className='Delete__wrape'>
				
				<h3>Удалить Акаунт</h3>

				<div className='Delete__btn'>
					<button  onClick={handleDeleete}>Удалить</button>
					<button onClick={() => changeActive(false)}>Отмена</button>
				</div>

				<img
					src={closeImg}
					onClick={() => changeActive(false)}
					className='CommentForm__img'
					alt='close-image'
				/>
			</div>
		</div>
	)
}

export default Delete


// <button onClick={() => changeActive(false)} >X</button>

// <div>
// 	<button onClick={handleDeleete} >ДА</button>
// 	<br />
// 	<button onClick={() => changeActive(false)} >
// 		НЕТ</button>
// </div>