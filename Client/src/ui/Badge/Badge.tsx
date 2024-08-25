import React from 'react';
import './Badge.scss';

type Modes = 'good' | 'bad';

interface ComponentProps {
	mode: Modes;
}

const Badge = ({ mode }: ComponentProps): JSX.Element => {
	const color = mode === 'good' ? '#24da49' : '#e05757';
	return (
		<div className="badge-container">
			<div className="badge" style={{backgroundColor: color}}></div>
		</div>
	)
}

export default Badge;