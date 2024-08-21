import React from 'react';
import './Caption.scss';

type Levels = 1 | 2 | 3
type Weights = 1 | 2 | 3
type Colors = 'white' | 'gray' | 'black'

interface ComponentProps {
	level?: Levels
	weight?: Weights
	color: Colors
	caps?: boolean
	children: string
}

const Caption = ({ level = 1, weight = 1, color, caps, children }: ComponentProps): JSX.Element => {
	return (
		<span className={`caption level-${level} weight-${weight} color-${color}`}>
			{
				caps ? children.toUpperCase() : children
			}
		</span>
	)
}

export default Caption;