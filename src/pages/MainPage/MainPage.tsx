import React, {useEffect} from 'react'
import '../../css.css'
import MoveList from '../../components/MoveList/MoveList'
import filmImg from '../../icons/16.jpg'
import {FilmiesStorage} from '../../db/movies-db'

const MainPage: React.FC = () => {

	const movies = [1, 2, 3, 4, 5]

	return (
		<div>
			<h1 className='text-h1'>MainPage</h1>

			{
				FilmiesStorage && FilmiesStorage.map((m, ind) => (
					<div key={ind}>
						<img
							src={m.src}
							alt='film'
						/>
						{
							m.descriptions && m.descriptions.map((m, ind) => <p key={ind}>{m.content}</p>
							)
						}
					</div>
				))
			}

			<div>
				{
					movies && <MoveList move={movies} />
				}
			</div>
		</div> 
	)
}

export default MainPage