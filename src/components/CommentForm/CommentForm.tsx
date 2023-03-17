import React, {useState} from 'react'
import '../../css.css'
import './CommentForm.css'
import closeImg from '../../icons/delete_2.png'
import {useAction} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useParams} from 'react-router-dom'

interface IFormProps {
	active: boolean;
	setActive: (a: boolean) => void;
}



const CommentForm: React.FC<IFormProps> = (props) => {
	const {active, setActive} = props
	const [comment, setComment] = useState('')

	const params = useParams()
	const {createCommentCA} = useAction()
	const {token} = useTypedSelector(state => state.auth)

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {event.preventDefault()};

	const handleCreateComment = () => {
		if(token) {
			createCommentCA(Number(params.id), comment, token)
			setComment('')
			setActive(false)
		}
		
	}	

	

	return (
		<div className={`CommentForm ${active ? 'active' : ''}`}>
			<div className='CommentForm__wrape'>
				<h3>Оставить коменнарии</h3>

				<form onSubmit={handleSubmit}>
					<textarea 
						placeholder='Текст...'
						value={comment}
          	onChange={event => setComment(event.target.value)}
					/>

					<div className='CommentForm__btn'>
						<button
							onClick={handleCreateComment}
						>Сохранить</button>
						<button
							onClick={() => setComment('')}
						>Отменить</button>
					</div>

				</form>

				<img
					src={closeImg}
					className='CommentForm__img'
					onClick={() => setActive(false)}
					alt='close-image'
				/>
			</div>
		</div>
	)
}

export default CommentForm