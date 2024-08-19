import React, { ReactNode } from 'react';
import './Cell.scss';

interface ComponentProps {
	children: ReactNode
}

const Cell = ({ children }: ComponentProps): JSX.Element => {
	return (
		<div className="cell">
			{children}
		</div>
	)
}

export default Cell;