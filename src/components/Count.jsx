import { useState } from 'react'
import { Button } from 'react-bootstrap'

const Count = () => {
	const [count, setCount] = useState(0)

	const increase = () => {
		setCount(count + 1)
	}

	const decrease = () => {
		setCount(count - 1)
	}

	console.log('count:', count)

	return (
		<div className="TukiChild">
			<h1>Contador Re-Render</h1>
			<h3>Contador: {count}!</h3>
			<div className="d-flex justify-content-evenly">
				<Button onClick={decrease}>Decrease!</Button>

				<Button onClick={increase}>Increase!</Button>
			</div>
		</div>
	)
}

export default Count
