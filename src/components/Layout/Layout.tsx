import React, {useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import '../../css.css'


interface AppProps {
  children: React.ReactNode | React.ReactElement | React.ReactElement[]
}

const Layout:React.FC<AppProps> = ({children}) => {

	return (
		<React.Fragment>
			<Navbar />
			<div className='base'>
				<div className='container'>
					{children}
				</div>
			</div>
		</React.Fragment>
	)
}

export default Layout