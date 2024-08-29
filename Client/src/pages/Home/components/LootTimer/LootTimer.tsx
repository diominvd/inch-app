import React, { useEffect, useState } from 'react';
import calculateLootTimer from '../../helpers/calculateLootTimer.js';

import HorizontalLayout from '../../../../ui/Layout/HorizontalLayout/HorizontalLayout.tsx';

import './LootTimer.scss';


interface ComponentProps {
	lastClaimTime: Date,
	storage: number,
}

const LootTimer = ({ lastClaimTime, storage }: ComponentProps): JSX.Element => {
	const [timer, setTimer] = useState('loading')
	
	useEffect(() => {
		const lootTimerIntervalId = setInterval(() => {
      setTimer(calculateLootTimer(lastClaimTime, storage))
    }, 1000);

		return () => clearInterval(lootTimerIntervalId);
	}, [])

	return (
		<HorizontalLayout justify="center" align="center">
			<span className="loot-timer">{timer}</span>
		</HorizontalLayout>
	)
}

export default LootTimer;