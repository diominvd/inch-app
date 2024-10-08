import React from 'react';
import './SubHeadline.scss';

type Weights = 1 | 2 | 3;
type Colors = 'white' | 'gray' | 'black';

interface ComponentProps {
	weight: Weights;
	color: Colors;
	plain?: boolean;
	caps?: boolean;
	children: string;
}

const SubHeadline = ({ weight, color, plain, caps, children }: ComponentProps): JSX.Element => {
	return (
		<h6 className={`subheadline weight-${weight} color-${color} plain-${plain}`}>
			{
				caps ? children.toUpperCase() : children
			}
		</h6>
	)
}

export default SubHeadline;