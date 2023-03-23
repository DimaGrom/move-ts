import React, {useEffect, useState} from 'react'
import '../../css.css'
import './MovePage.css'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useAction} from '../../hooks/useActions'
import {useParams, useNavigate} from  'react-router-dom'
import {FilmiesStorage} from '../../db/movies-db'
import emptyLike from '../../icons/heart_01.png'
import commentImg from '../../icons/comment3.png'


const MovePage:React.FC = () => {

	const {
		moveById, 
		moveLoading, 
		myMoveAddCreateAction, 
		myMoveDeleteCA, 
		myMoveCA, 
		myMoveCheckCA,
		commentCA
	} = useAction()

	const params = useParams()

	const {
		move, 
		movies, 
		myMovies, 
		checkMyMovies,
	} = useTypedSelector(state => state.movies)

	const {commentCount} = useTypedSelector(state => state.comment)

	const {token, likeMoves} = useTypedSelector(state => state.auth)

	const [add, setAdd] = useState(false)

	const [check, setCheck] = useState(false)
	
	const navigate = useNavigate()

	useEffect(() => {
		moveLoading(FilmiesStorage)
		console.log('It`s MovePage:React.FC')
	}, [])

	useEffect(() => {
		moveById(Number(params.id))
		if(token) {
			myMoveCA(Number(params.id), token)
		}	
	}, [movies])

	useEffect(() => {
		if(token) {
			myMoveCheckCA(Number(params.id), token)
		}	
	}, [myMovies])

	useEffect(() => {
		commentCA(Number(params.id))
	}, [])
	
	const handleAddMove = () => {
		if(token) {
			myMoveAddCreateAction(Number(params.id), token)
		}	
		setAdd(true)
	}

	const handleDeleteMove = () => {
		if(token) {
			myMoveDeleteCA(Number(params.id), token)
		}
		setAdd(false)
	}

	if(!move) {
		return (
			<div className='MovePage'>
				<h1 style={{fontSize: 24}}>The MovePage loading</h1>
			</div>
		)
	}

	const handleCommet = () => {
		if(move) {
			navigate(`/${move.id}/comment`)
		}
	}

	return (
		<div className='MovePage'>
			
			<div className='MovePage__img'>
				{
					move.src && <img src={move.src} alt='picture' />
				}
			</div>

			<div className='MovePage__panale'>
				<div style={{cursor: 'pointer', fontWeight: 700}}>
					<img
						onClick={handleCommet}
						src={commentImg}
						alt='commentImage'
					/> {commentCount}
				</div>
				{
					(token && !checkMyMovies) && (
						<div
							className="MovePage__add"
							onClick={handleAddMove}
						>
							ADD
						</div>
					)
				}
				{
					(token && checkMyMovies) && (
						<div
							className="MovePage__delete"
							onClick={handleDeleteMove}
						>
							DELLETE
						</div>
					)
				}
			</div>

			<p style={{fontSize: 18, fontWeight: 700, margin: '10px 0'}}>{move.title}</p>

			<p style={{fontWeight: 700, marginBottom: 5, opacity: 0.8}}>Описание фильма:</p>

			<div className='MovePage__content'>
				{
					move && move.descriptions?.map((m, k) => (
						<p key={k}>{m.content}</p>
					))
				}
			</div>

		</div>
	)
}

export default MovePage