import React from 'react';
import './FriendsDescription.scss';

interface ComponentProps {

}

const FriendsDescription = ({  }: ComponentProps): JSX.Element => {
	return (
		<div className="friends-description">
			<p>Invite friends and get <span>50 $tINCH</span> for every invited friend. In the future, it will be possible to <span>create your own teams</span>. Start building a community now.</p>
		</div>
	)
}

export default FriendsDescription;