import React, {useEffect} from 'react'
import '../../css.css'
import MoveList from '../../components/MoveList/MoveList'
import localforage from 'localforage'

const MainPage: React.FC = () => {


	// useEffect(() => {
	// 	localforage.removeItem('users')
	// }, [])


	return (
		<div>
			<MoveList />
		</div> 
	)
}

export default MainPage