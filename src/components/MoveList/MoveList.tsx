import React from 'react'
import MoveItem from '../MoveItem/MoveItem'

interface IMoveListProps {
	move: any[]
}

const MoveList: React.FC<IMoveListProps> = (props) => {
	const {move} = props

	console.log('MoveList movies ', move)

	return (
		<div>
			{
				move && move.map((m, indx) => <MoveItem key={indx} />)
			}
		</div>
	)
}

export default MoveList