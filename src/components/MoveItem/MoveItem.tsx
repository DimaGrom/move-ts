import React from 'react'
import '../../css.css'
import './moveItem.css'
import {useNavigate} from 'react-router-dom'
import deietImg from '../../icons/Button_Delete-01_25095.png'
import {useAction} from '../../hooks/useActions' 
import {useTypedSelector} from '../../hooks/useTypedSelector'

 
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
	comments?: IComments[] | any[];
}

interface IProps {
	move: ArrayProps;
	check?: boolean;
}

const MoveItem: React.FC<IProps> = (props) => {
	const {title, src, descriptions, like, id, comments} = props.move
	const {check} = props
	const navigate = useNavigate()
	const {myMoveFilmsDeleteByIdAC} = useAction()
	const {token} = useTypedSelector(state => state.auth)

	const handleNavigate = () => {
		navigate(`/${id}`)
	}

	const handleDelete = () => {
		if(token) {
			myMoveFilmsDeleteByIdAC(Number(id), token)
		}
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

			{
				check && (
					<div className='MoveItem__icon'>
						<div>COMMENT</div>
						<div>
							<img 
								onClick={handleDelete}
								src={deietImg} 
								alt='delet' 
								/>
						</div>
					</div>
				)
			}
			
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