import React from 'react';
import './Headline.scss';

type Weights = 1 | 2 | 3;
type Colors = 'white' | 'gray' | 'black';

interface ComponentProps {
	weight: Weights;
	color: Colors;
	plain?: boolean;
	caps?: boolean;
	children: string;
}

const Headline = ({ weight, color, plain, caps, children }: ComponentProps): JSX.Element => {
	return (
		<h5 className={`headline weight-${weight} color-${color} plain-${plain}`}>
			{
				caps ? children.toUpperCase() : children
			}
		</h5>
	)
}

export default Headline;