import React, {useEffect} from 'react'
import '../../css.css'
import './MovePage.css'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useAction} from '../../hooks/useActions'
import {useParams} from  'react-router-dom'
import {FilmiesStorage} from '../../db/movies-db'

const MovePage:React.FC = () => {

	const {moveById, moveLoading} = useAction()
	const params = useParams()
	const {move, movies} = useTypedSelector(state => state.movies)

	console.log(' MovePage  move ', move)
	console.log(' MovePage  movies ', movies)

	useEffect(() => {
		moveLoading(FilmiesStorage)
	}, [])
	
	useEffect(() => {
		moveById(Number(params.id))
	}, [movies])

	if(!move) {
		return (
			<div className='MovePage'>
				<h1 style={{fontSize: 24}}>The MovePage loading</h1>
			</div>
		)
	}

	return (
		<div className='MovePage'>
			
			<div className='MovePage__img'>
				{
					move.src && <img src={move.src} alt='picture' />
				}
			</div>

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