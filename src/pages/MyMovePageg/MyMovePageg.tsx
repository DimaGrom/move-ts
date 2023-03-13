import React, {useEffect, useState} from 'react'
import '../../css.css'

import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useAction} from '../../hooks/useActions'
import MoveItem from '../../components/MoveItem/MoveItem'
import Pagination from '../../components/Pagination/Pagination'
import {FilmiesStorage} from '../../db/movies-db'


const MyMovePageg:React.FC = () => {

	const {token} = useTypedSelector(state => state.auth)

	const {
		myMoveFilmsAC, 
		moveLoading
	} = useAction()

	const {
		movies, 
		loadig, 
		movePages, 
		myMoveFilms
	} = useTypedSelector(state => state.movies)

	const [numberPage, setNumberPage] = useState<number>(0)

	useEffect(() => {
		if(token) {
			myMoveFilmsAC(FilmiesStorage, token)
		}	
	}, [token])

	useEffect(() => {
		moveLoading(FilmiesStorage)
	}, [])

	console.log('MyMovePageg:React.FC   myMoveFilms ', myMoveFilms)
	console.log('MyMovePageg:React.FC   movies ', movies)

	if(loadig) {
		return (
			<div>
				<h1 className='text-h1'>Загрузка фильмов</h1>
			</div>
			)
	}

	const pageVisited = numberPage * movePages
	const moveAmountPages = Math.ceil(myMoveFilms.length / movePages)

	return (
		<div>
			<div className='MoveList'>
				{
					myMoveFilms && myMoveFilms.slice(pageVisited, pageVisited + movePages).map((m, indx) => <MoveItem key={indx} move={m} />)
				}
			</div>
			<Pagination 
				amountPages={moveAmountPages}
				changeNumberPage={setNumberPage}
			/>
		</div>
	)
}

export default MyMovePageg