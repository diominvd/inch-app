import React from 'react';
import './Header.scss';
import IconStar from '../../icons/IconPremium';

interface ComponentProps {
	username: string;
}

const Header = ({ username }: ComponentProps): JSX.Element => {
	return (
		<div className="header">
			<IconStar premium={false} size={6} />
			<span className="logo">{username}</span>
		</div>
	)
}

export default Header;