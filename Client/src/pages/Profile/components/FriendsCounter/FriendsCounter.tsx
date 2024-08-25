import React from 'react';
import './FriendsCounter.scss';

interface ComponentProps {
	friends: number;
}

const FriendsCounter = ({ friends }: ComponentProps): JSX.Element => {
	return (
		<div className="friends-counter">
			<p>You invited <span>{friends}</span> friends ✨</p>
		</div>
	)
}

export default FriendsCounter;