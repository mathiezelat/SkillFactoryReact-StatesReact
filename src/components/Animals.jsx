import { useState } from 'react'
import { Button } from 'react-bootstrap'

const Animals = () => {
	const [animals, setAnimals] = useState(['Raccoon'])

	const addAnimals = () => {
		setAnimals([...animals, 'Perro', 'Gato', 'Erizo', 'Leon', 'Tortuga'])
	}

	console.log('Animals', animals)
	return (
		<div className="pt-1">
			<Button variant="secondary" onClick={addAnimals}>
				Add Animals
			</Button>
		</div>
	)
}

export default Animals
