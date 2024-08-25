import React from 'react';
import './Text.scss';

type Weights = 1 | 2 | 3;
type Colors = 'white' | 'gray' | 'black';

interface ComponentProps {
	weight: Weights;
	color: Colors;
	center?: boolean 
	caps?: boolean;
	children: any;
}

const Text = ({ weight, color, center, caps, children }: ComponentProps): JSX.Element => {
	return (
		<span className={`text weight-${weight} color-${color} center-${center}`}>
			{
				caps ? children.toUpperCase() : children
			}
		</span>
	)
}

export default Text;