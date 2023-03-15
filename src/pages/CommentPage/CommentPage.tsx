import React, {useEffect, useState} from 'react'
import '../../css.css'
import './CommentPage.css'
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
			

		</div>
	)
}

export default CommentPage


// CommentPage

		// <div className='CommentPage'>
			
		// 	<div className='CommentPage__img'>
		// 		{
		// 			move.src && <img src={move.src} alt='picture' />
		// 		}
		// 	</div>

		// 	<div className='CommentPage__panale'>
		// 		<div>COMMENT</div>	
		// 		{
		// 			(token && !checkMyMovies) && (
		// 				<div
		// 					className="CommentPage__add"
		// 					onClick={handleAddMove}
		// 				>
		// 					ADD
		// 				</div>
		// 			)
		// 		}
		// 		{
		// 			(token && checkMyMovies) && (
		// 				<div
		// 					className="CommentPage__delete"
		// 					onClick={handleDeleteMove}
		// 				>
		// 					DELLETE
		// 				</div>
		// 			)
		// 		}
		// 	</div>

		// 	<div className='CommentPage__comment'>
		// 		<h1>Написать комментарии</h1>
		// 	</div>
			

		// </div>