import React, {useEffect, useState} from 'react'
import '../../css.css'
import './CommentPage.css'
import CommentForm from '../../components/CommentForm/CommentForm'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useAction} from '../../hooks/useActions'
import {useParams, NavLink, useNavigate} from  'react-router-dom'
import {FilmiesStorage} from '../../db/movies-db'
import emptyLike from '../../icons/heart_01.png'


const CommentPage:React.FC = () => {

	const {
		moveById, 
		moveLoading, 
		myMoveCA, 
		commentCA,
		commentsByIdAllCA
	} = useAction()

	const params = useParams()
	const {
		move, 
		movies, 
	} = useTypedSelector(state => state.movies)

	const {token, tokenID, likeMoves} = useTypedSelector(state => state.auth)

	const {commentCount, checkCommens, commentsById} = useTypedSelector(state => state.comment)

	const [form, setForm] = useState(false)

	const navigate = useNavigate()

	useEffect(() => {
		commentCA(Number(params.id))
	}, [])

	useEffect(() => {
		commentsByIdAllCA(Number(params.id))
	}, [checkCommens])

	useEffect(() => {
		console.log('It is CommentPage:React.FC')
		moveLoading(FilmiesStorage)
	}, [])

	useEffect(() => {
		moveById(Number(params.id))
		if(token) {
			myMoveCA(Number(params.id), token)
		}	
	}, [movies])

	const handleCreateComment = () => {
		setForm(true)
	}

	const handleForMainPage = () => {
		navigate('/')
	}

	console.log('CommentPage:React.FC tokenID =========== ', tokenID)
	
	return (
		<div className='CommentPage'>
			
			<div className='CommentPage__img'>
				{
					move && (
						<img src={move.src} alt='picture' />
					)
				}
			</div>

			<div className='CommentPage__comment'>
				{
					(commentCount === 0 && !token) && (
						<div className='CommentPage__not-comment'>
							<h1>Комметариев нет</h1>
							<h1>Чтобы оставлять кооментарии необходимо <NavLink className='CommentPage_a' to='/login'>авторизоваться</NavLink></h1>
						</div>
					)
				}
				{
					(commentCount !== 0 && !token) && (
						<div className='CommentPage__not-comment'>
							<h1>Чтобы оставлять кооментарии необходимо <NavLink className='CommentPage_a' to='/login'>авторизоваться</NavLink></h1>
						</div>
					)
				}
				{
					(commentCount === 0 && token) && (
						<div className='CommentPage__not-comment'>
							<h1>Комметариев к фильму пока нет. Станте первым!</h1>
						</div>
					)
				}
	
			</div>

			<div>

				{
					token && (
						<div 
							className='CommentPage__write-comment' 
							onClick={handleCreateComment}
						>
							Напишите комментаии
						</div>
					)
				}

					
				<div 
					className='CommentPage__formain' 
					onClick={handleForMainPage}
				>
					На Главную
				</div>
					<CommentForm 
						active={form}
						setActive={setForm}
   			  />		
			</div>		

			<div className='CommentPage__content'>
			{
				commentsById !== null && commentsById.comments.map((m, k) => 
					<div 
						key={k}
						className={`${(tokenID  && m.authID === tokenID) ? 'right' : ''}`}
					>
						<p>Текст {m.text}</p>
						<p>Дата {m.datedate}</p>
						<p>Имя {m.name}</p>
					</div>
				)
			}
			</div>

		</div>
	)
}

export default CommentPage