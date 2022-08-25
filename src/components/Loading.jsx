import { useState } from 'react'
import { Button } from 'react-bootstrap'

const Loading = () => {
	const [loading, setLoading] = useState(false)

	const changeLoading = () => {
		setLoading(!loading)
	}

	console.log('Loading:', loading)

	return (
		<div className="pt-1">
			<Button variant="warning" onClick={changeLoading}>
				Change Loading
			</Button>
		</div>
	)
}

export default Loading
