import { useState } from 'react'
import { Button } from 'react-bootstrap'

const Info = () => {
	const [info, setInfo] = useState({ name: 'Mathi', age: 22 })

	const changeInfo = () => {
		setInfo({ ...info, name: 'Mathias', lastName: 'Latronico' })
	}

	console.log('Info:', info)

	return (
		<div className="pt-1">
			<Button variant="info" onClick={changeInfo}>
				Change Info
			</Button>
		</div>
	)
}

export default Info
