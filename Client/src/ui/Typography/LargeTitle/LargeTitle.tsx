import React from 'react';
import './LargeTitle.scss';

type Weights = 1 | 2 | 3
type Colors = 'white' | 'gray' | 'black'

interface ComponentProps {
	weight: Weights
	color: Colors
	plain: boolean
	caps: boolean
	children: string
}

const LargeTitle = ({ weight, color, plain, caps, children }: ComponentProps): JSX.Element => {
	return (
		<h1 className={`largetitle weight-${weight} color-${color} plain-${plain}`}>
			{
				caps ? children.toUpperCase() : children
			}
		</h1>
	)
}

export default LargeTitle;