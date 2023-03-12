import React from 'react'
import '../../css.css'
import './moveItem.css'
import {useNavigate} from 'react-router-dom'

interface IDescriptions {
	content: string;
}

interface IComments {
	authName: string;
	aythID: string;
	comment: string;
}

interface ArrayProps {
	id?: number;
	descriptions?: IDescriptions[] | any[];
	like?: number
	src?: string;
	title?: string;
	comments: IComments[] | any[];
}

interface IProps {
	move: ArrayProps;
}

const MoveItem: React.FC<IProps> = (props) => {
	const {title, src, descriptions, like, id, comments} = props.move
	const navigate = useNavigate()

	const handleNavigate = () => {
		console.log('MoveItem  id ',  id)
		navigate(`/${id}`)
	}

	return (
		<div className='MoveItem'>

			<div 
				className='MoveItem__img'
				onClick={handleNavigate}
			>
				<img
					src={src}
					alt='Film'
				/>
			</div>
			
			<p className='MoveItem__title'>{title}</p>
			<div className='line-clamp-3'>
				{
					descriptions && descriptions.map((m, indx) => (
						<p key={indx}>{m.content}</p>
					))
				}
			</div>
			<div></div>
		</div>
	)
}

export default MoveItem