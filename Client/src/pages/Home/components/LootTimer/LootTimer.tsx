import React from 'react';
import calculateLootTimer from '../../helpers/calculateLootTimer.js';

import HorizontalLayout from '../../../../ui/Layout/HorizontalLayout/HorizontalLayout.tsx';

import './LootTimer.scss';


interface ComponentProps {
	// Props
}

const LootTimer = ({  }: ComponentProps): JSX.Element => {
	const lootTimer = calculateLootTimer()

	return (
		<HorizontalLayout justify="center" align="center">
			<span className="loot-timer">{lootTimer}</span>
		</HorizontalLayout>
	)
}

export default LootTimer;