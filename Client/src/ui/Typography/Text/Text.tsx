import React from 'react';
import './Text.scss';

type Weights = 1 | 2 | 3
type Colors = 'white' | 'gray' | 'black'

interface ComponentProps {
	weight: Weights
	color: Colors
	caps: boolean
	children: string
}

const Text = ({ weight, color, caps, children }: ComponentProps): JSX.Element => {
	return (
		<span className={`text weight-${weight} color-${color}`}>
			{
				caps ? children.toUpperCase() : children
			}
		</span>
	)
}

export default Text;