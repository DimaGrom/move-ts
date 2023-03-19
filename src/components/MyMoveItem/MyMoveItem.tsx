import React, {useState, useEffect} from 'react'
import '../../css.css'
import './MyMoveItem.css'
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
	check: boolean;
}

const MyMoveItem: React.FC<IProps> = (props) => {

	const {title, src, descriptions, like, id, comments} = props.move

	const [count, setCount] = useState(0)

	const {check} = props

	const navigate = useNavigate()

	const {myMoveFilmsDeleteByIdAC, commentAllCA} = useAction()

	const {token} = useTypedSelector(state => state.auth)

	const {commentCount} = useTypedSelector(state => state.comment)

	useEffect(() => {
		console.log('It`s MyMoveItem: React.FC<IProps>')
	}, [])

	useEffect(() => {
		(async () => {
			const data: any = await commentAllCA(Number(id))
			setCount(data)
		})()
	}, [])

	const handleNavigate = () => {
		navigate(`/${id}`)
	}

	const handleDelete = () => {
		if(token) {
			myMoveFilmsDeleteByIdAC(Number(id), token)
		}
	}

	return (
		<div className='MyMoveItem'>

			<div 
				className='MyMoveItem__img'
				onClick={handleNavigate}
			>
				<img
					src={src}
					alt='Film'
				/>
			</div>

			{
				check && (
					<div className='MyMoveItem__icon'>
						<div>COMMENT {count}</div>
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
			
			<p className='MyMoveItem__title' style={{color: 'black', margin: '10px 0'}}>{title}</p>
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

export default MyMoveItem