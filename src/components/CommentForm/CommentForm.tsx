import React, {useState} from 'react'
import '../../css.css'
import './CommentForm.css'
import closeImg from '../../icons/delete_2.png'

interface IFormProps {
	active: boolean;
	setActive: (a: boolean) => void;
}



const CommentForm: React.FC<IFormProps> = (props) => {
	const {active, setActive} = props
	const [comment, setComment] = useState('')

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {event.preventDefault()};

	const handleCreateComment = () => {
		console.log('CommentForm: React.FC<IFormProps> comment ', comment)
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
						<button>Отменить</button>
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