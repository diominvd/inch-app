import React, { useEffect, useState } from 'react';
import MotionNumber from 'motion-number';
import { easeOut } from 'framer-motion';

import calculateLoot from '../../helpers/calculateLoot.js';

import HorizontalLayout from '../../../../ui/Layout/HorizontalLayout/HorizontalLayout.tsx';

import './Loot.scss';

interface ComponentProps {
	lastClaimTime: Date,
	reactor: number,
	storage: number,
}

const Loot = ({ lastClaimTime, reactor, storage }: ComponentProps): JSX.Element => {
	const [loot, setLoot] = useState(0)
	
	useEffect(() => {
		const lootIntervalId = setInterval(() => {
      setLoot(calculateLoot(lastClaimTime, reactor, storage))
    }, 1000);

		return () => clearInterval(lootIntervalId);
	}, [])

	return (
		<HorizontalLayout justify="center" align="center">
			<MotionNumber
				value={loot}
				format={{ notation: "standard" }}
				locales="en-US"
				transition={{
					layout: { type: 'spring', duration: 0.7, bounce: 0 },
					y: { type: 'spring', duration: 0.7, bounce: 0.25 },
					opacity: { duration: 0.7, ease: easeOut, times: [0, 0.3] }
				}}
			/>
		</HorizontalLayout>
	)
}

export default Loot;