import React from 'react';
import './Caption.scss';

type Levels = 1 | 2 | 3
type Weights = 1 | 2 | 3
type Colors = 'white' | 'gray' | 'black'

interface ComponentProps {
	level?: Levels;
	weight?: Weights;
	color: Colors;
	center?: boolean;
	caps?: boolean;
	children: any;
}

const Caption = ({ level = 1, weight = 1, color, center, caps, children }: ComponentProps): JSX.Element => {
	return (
		<span className={`caption level-${level} weight-${weight} color-${color} center-${center}`}>
			{
				caps ? children.toUpperCase() : children
			}
		</span>
	)
}

export default Caption;