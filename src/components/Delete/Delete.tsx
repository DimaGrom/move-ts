import React, {useState} from 'react'
import '../../css.css'
import './Delete.css'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useAction} from '../../hooks/useActions'
import {useNavigate} from 'react-router-dom'

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
			<div>
				<button onClick={() => changeActive(false)} >X</button>

				<div>
					<button onClick={handleDeleete} >ДА</button>
					<br />
					<button onClick={() => changeActive(false)} >
						НЕТ</button>
				</div>
			</div>
		</div>
	)
}

export default Delete