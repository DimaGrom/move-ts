import React from 'react'
import '../../css.css'
import MoveList from '../../components/MoveList/MoveList'

const MainPage: React.FC = () => {

	const movies = [1, 2, 3, 4, 5]

	return (
		<div>
			<h1 className='text-h1'>MainPage</h1>
			<div>
				{
					movies && <MoveList move={movies} />
				}
			</div>
		</div> 
	)
}

export default MainPage