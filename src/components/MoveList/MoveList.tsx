import React, {useEffect, useState} from 'react'
import MoveItem from '../MoveItem/MoveItem'
import Pagination from '../../components/Pagination/Pagination'
import {FilmiesStorage} from '../../db/movies-db'
import {useAction} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import '../../css.css'
import './moveList.css'

const MoveList: React.FC = () => {
	const {moveLoading} = useAction()
	const {movies, loadig, movePages} = useTypedSelector(state => state.movies)
	const [numberPage, setNumberPage] = useState<number>(0)

	useEffect(() => {
		moveLoading(FilmiesStorage)
	}, [])

	if(loadig) {
		return (
			<div>
				<h1 className='text-h1'>Загрузка фильмов</h1>
			</div>
			)
	}

	const pageVisited = numberPage * movePages
	const moveAmountPages = Math.ceil(movies.length / movePages)

	return (
		<div>
			<div className='MoveList'>
				{
					movies && movies.slice(pageVisited, pageVisited + movePages).map((m, indx) => <MoveItem key={indx} move={m} />)
				}
			</div>
			<Pagination 
				amountPages={moveAmountPages}
				changeNumberPage={setNumberPage}
			/>
		</div>
	)
}

export default MoveList