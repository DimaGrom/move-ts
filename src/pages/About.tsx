import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const AboutPage: React.FC = () => {
	const [message, setMessage] = useState('')
	const {number} = useParams()

	console.log('AboutPage  number ', number)

	useEffect(() => {
		if(number) {
			setMessage('The number is' + number)
		} else {
			setMessage('No number was provided')
		}
	}, [])

	return (
		<div>
			<p>This is AboutPage</p>
			<p>{message}</p>
		</div>
	)

}

export default AboutPage