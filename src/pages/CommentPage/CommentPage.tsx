import React, {useEffect, useState} from 'react'
import '../../css.css'
import './CommentPage.css'
import CommentForm from '../../components/CommentForm/CommentForm'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useAction} from '../../hooks/useActions'
import {useParams, NavLink} from  'react-router-dom'
import {FilmiesStorage} from '../../db/movies-db'
import emptyLike from '../../icons/heart_01.png'

const CommentPage:React.FC = () => {
	const {
		moveById, 
		moveLoading, 
		// myMoveAddCreateAction, 
		// myMoveDeleteCA, 
		myMoveCA, 
		// myMoveCheckCA
	} = useAction()
	const params = useParams()
	const {
		move, 
		movies, 
		myMovies, 
		// checkMyMovies,
	} = useTypedSelector(state => state.movies)
	const {token, likeMoves} = useTypedSelector(state => state.auth)
	// const [add, setAdd] = useState(false)
	// const [check, setCheck] = useState(false)
	const [form, setForm] = useState(false)

	console.log('CommentPage:React.FC form ', form)

	const commet = []

	useEffect(() => {
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
					(commet.length === 0 && !token) && (
						<div className='CommentPage__not-comment'>
							<h1>Комметариев нет</h1>
							<h1>Чтобы оставлять кооментарии необходимо <NavLink className='CommentPage_a' to='/login'>авторизоваться</NavLink></h1>
						</div>
					)
				}
				{
					(commet.length !== 0 && !token) && (
						<div className='CommentPage__not-comment'>
							<h1>Чтобы оставлять кооментарии необходимо <NavLink className='CommentPage_a' to='/login'>авторизоваться</NavLink></h1>
						</div>
					)
				}
				{
					(commet.length === 0 && token) && (
						<div className='CommentPage__not-comment'>
							<h1>Комметариев к фильму пока нет. Станте первым!</h1>
						</div>
					)
				}
				{
					(commet.length !== 0 && token) && (
						<div className='CommentPage__not-comment'>
							<h1>Написать комментарии</h1>
						</div>
					)
				}
				
			</div>

			<div>

				<div 
					className='CommentPage__write-comment' 
					onClick={handleCreateComment}
				>
					Напишите комментаии
				</div>
					<CommentForm 
						active={form}
						setActive={setForm}
   			  />		
			</div>
			

		</div>
	)
}

export default CommentPage
