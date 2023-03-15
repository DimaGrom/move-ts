import React, {useEffect, useState} from 'react'
import '../../css.css'
import '../../components/MoveList/moveList.css'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useAction} from '../../hooks/useActions'
import MoveItem from '../../components/MoveItem/MoveItem'
import Pagination from '../../components/Pagination/Pagination'
import {FilmiesStorage} from '../../db/movies-db'


const MyMovePageg:React.FC = () => {
	const [myMovePageg, SetMyMovePageg] = useState(true)
	const {token} = useTypedSelector(state => state.auth)
	const [numberPage, setNumberPage] = useState<number>(0)
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
	
	useEffect(() => {
		if(token) {
			myMoveFilmsAC(FilmiesStorage, token)
		}	
	}, [token])

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

	if(myMoveFilms.length === 0) {
		return (
			<div>
				<h4 
					style={{fontSize: 24}}
				>У Вас нет избранных фильмов</h4>
			</div>
		)
	}

	const pageVisited = numberPage * movePages
	const moveAmountPages = Math.ceil(myMoveFilms.length / movePages)

	return (
		<div>
			<div className='MoveList'>
				{
					myMoveFilms && myMoveFilms.slice(pageVisited, pageVisited + movePages).map((m, indx) => <MoveItem key={indx} move={m} check={myMovePageg} />)
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