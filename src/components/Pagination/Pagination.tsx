import React, {useState, useEffect} from 'react'
import '../../css.css'
import './pagination.css'

interface IProps {
	usersPages: number;
	setPageNumber: (a: number) => any; 
}

const Pagination:React.FC<IProps>  = (props) => {
	const {setPageNumber} = props
	const [indexNow, setIndexNow] = useState<number>(1)
	const [nextBoolean, SetNextBoolean] = useState<boolean>(true)

	const usersPages = 100

	const pages = []

	useEffect(() => {
		if(indexNow <= 4) {
			SetNextBoolean(true)
		} else {
			SetNextBoolean(false)
		}
	}, [indexNow])

	const handleChangeIndexNow = (indx: number) => {
		setIndexNow(indx)
		setPageNumber(indx-1)
	}

	const handleChangeIndexNext = () => {
		if(indexNow < usersPages) {
			setIndexNow(indexNow + 1)
			setPageNumber(indexNow)
		}		
	}

	const handleChangeIndexPrev = () => {
		if(indexNow > 1) {
			setIndexNow(indexNow - 1)
			setPageNumber(indexNow - 2)
		}
	}

	if(usersPages <= 10) {
		for(let i = 0; i < usersPages; i++ ) {
			pages[i] = i + 1
		}
		return (
			<div className='Pagination'>
				<h3>Pagination</h3>
				<div
					style={{
						display: 'flex'
					}}
				>
					<div
						onClick={handleChangeIndexNext}
						style={{
							margin: '0 5px',
							padding: '4px 8px',
							border: 'solid green 1px',
							cursor: 'pointer'
						}}
					>Next</div>
					{
						pages.length > 0 && pages.map((m, indx) => 
							<div 
								onClick={() => handleChangeIndexNow(m)}
								key={indx}
								className={`${indexNow === m ? 'active' : ''}`}
								style={{
									margin: '0 5px',
									padding: '4px 8px',
									border: 'solid green 1px',
									cursor: 'pointer'
								}}
							>{m}</div>
						)
					}
					<div
						onClick={handleChangeIndexPrev}
						style={{
							margin: '0 5px',
							padding: '4px 8px',
							border: 'solid green 1px',
							cursor: 'pointer'
						}}
					>Prev</div>

				</div>
			</div>
		)
	}

	if(indexNow === 1 ||  indexNow === 2 ||  indexNow === 3 ||  indexNow === 4) {
		for(let i = 0; i < 6; i++ ) {
			pages[i] = i + 1
		}
	}

	if(indexNow > 4 && indexNow < usersPages - 2) {
		for(let i = 0; i < 5; i++ ) {
			pages[i] = indexNow - 2 + i
		}
	}

	if(indexNow === usersPages || indexNow === usersPages - 1 || indexNow === usersPages - 2 || indexNow === usersPages - 2) {
		for(let i = 0; i < 6; i++ ) {
			pages[i] = usersPages - 5 + i
		}
	}
	
	return (
		<div className='Pagination'>
			<h3>Pagination</h3>
			<div
				style={{
					display: 'flex',
					width: '200px'
				}}
			>
				<div
					onClick={handleChangeIndexNext}
					style={{
						margin: '0 5px',
						padding: '4px 8px',
						border: 'solid green 1px',
						cursor: 'pointer'
					}}
				>Next</div>
				{
					(pages.length === 6 && nextBoolean) && (
						<div
							style={{
								display: 'flex'
							}}
						>
							{
								pages.map((m, indx) => 
									<div 
										onClick={() => handleChangeIndexNow(m)}
										key={indx}
										className={`${indexNow === m ? 'active' : ''}`}
										style={{
											margin: '0 5px',
											padding: '4px 8px',
											border: 'solid green 1px',
											cursor: 'pointer'
										}}
									>{m}</div>
								)
							}
							<div style={{margin: '0 5px'}}>...</div>
						</div>
					)
				}
				{
					pages.length === 5 && (
						<div
							style={{
								display: 'flex'
							}}
						>
							<div style={{margin: '0 5px'}}>...</div>
								{
									pages.map((m, indx) => 
										<div 
											onClick={() => handleChangeIndexNow(m)}
											key={indx}
											className={`${indexNow === m ? 'active' : ''}`}
											style={{
												margin: '0 5px',
												padding: '4px 8px',
												border: 'solid green 1px',
												cursor: 'pointer'
											}}
										>{m}</div>
									)
								}
							<div style={{margin: '0 5px'}}>...</div>
						</div>
					)
				}
				{
					(pages.length === 6 && !nextBoolean) && (
						<div
							style={{
								display: 'flex'
							}}
						>
							<div style={{margin: '0 5px'}}>...</div>
								{
									pages.map((m, indx) => 
										<div 
											onClick={() => handleChangeIndexNow(m)}
											key={indx}
											className={`${indexNow === m ? 'active' : ''}`}
											style={{
												margin: '0 5px',
												padding: '4px 8px',
												border: 'solid green 1px',
												cursor: 'pointer'
											}}
										>{m}</div>
									)
								}
						</div>
					)
				}
				<div
					onClick={handleChangeIndexPrev}
					style={{
						margin: '0 5px',
						padding: '4px 8px',
						border: 'solid green 1px',
						cursor: 'pointer'
					}}
				>Prev</div>
			</div>
		</div>
	)
}

export default Pagination