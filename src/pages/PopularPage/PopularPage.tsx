import React, {useState} from 'react'
import JsonData from '../../db/MOCL_DATA.json'
import ReactPaginate from 'react-paginate'
import Pagination from '../../components/Pagination/Pagination'

interface IUser {
email?: string;
firstName?: string;
id?: number;
lastName?: string;
password?: string;
[index: number]: any
} 

interface Itemp {
  [index: number]: IUser;
}

const PopularPage:React.FC = () => {
	// @ts-ignore
	const [users, setUsers] = useState<IUser[]>(JsonData)
	const [pageNumber, setPageNumber] = useState<number>(0)
	const [usersPerPage, setUsersPerPage] = useState<number>(10)	

	// const usersPerPage = 10
	const pageVisited = pageNumber * usersPerPage

	const displayUsers = users.slice(pageVisited, pageVisited + usersPerPage).map((user: IUser) => {
			return (
				<div 
					key={user.id}
					style={{
						background: '#ACDEFF',
						width: '250px',
						margin: '10px',
						padding: '10px'
					}}
				>
					<h3>{user.firstName}</h3>
					<h3>{user.lastName}</h3>
					<h3>{user.email}</h3>
					<h3>{user.id}</h3>
				</div>
			)	
	})

	// @ts-ignore
	const usersPages = Math.ceil(JsonData.length / usersPerPage)

	return (
		<div>

			<Pagination 
				usersPages={usersPages}
				setPageNumber={setPageNumber}
			/>

			{displayUsers}
		</div>
	)
}

export default PopularPage