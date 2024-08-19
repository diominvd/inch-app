import React from 'react';
import './NavigationPanel.scss';

import NavigationElement from './NavigationElement/NavigationElement';

import IconHome from '../../Icons/IconHome.tsx';
import IconUpgrades from '../../Icons/IconUpgrades.tsx';
import IconTasks from '../../Icons/IconTasks.tsx';
import IconProfile from '../../Icons/IconProfile.tsx';

interface ComponentProps {
	
}

const NavigationPanel = ({  }: ComponentProps): JSX.Element => {
	const iconSize = 6.5;
	return (
		<nav className="navigation-panel">
			<NavigationElement path="/" icon={<IconHome size={iconSize}/>} text="Home" />
			<NavigationElement path="/upgrades" icon={<IconUpgrades size={iconSize} />}text="Upgrades" />
			<NavigationElement path="/tasks" icon={<IconTasks size={iconSize}/>} text="Tasks" />
			<NavigationElement path="/profile" icon={<IconProfile size={iconSize}/>} text="Profile" />
		</nav>
	)
}

export default NavigationPanel;