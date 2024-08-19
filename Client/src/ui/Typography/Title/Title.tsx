import React from 'react';
import './Title.scss';

type Levels = 1 | 2 | 3
type Weights = 1 | 2 | 3
type Colors = 'white' | 'gray' | 'black'

interface ComponentProps {
	level: Levels
	weight: Weights
	color: Colors
	plain?: boolean
	caps?: boolean
	children: string
}

const Title = ({ level, weight, color, plain, caps, children }: ComponentProps): JSX.Element => {
	return (
		<h2 className={`title level-${level} weight-${weight} color-${color} plain-${plain}`}>
			{
				caps ? children.toUpperCase() : children
			}
		</h2>
	)
}

export default Title;