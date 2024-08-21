import React, { useEffect, useState } from 'react';
import calculateLoot from '../../helpers/calculateLoot.js';

import HorizontalLayout from '../../../../ui/Layout/HorizontalLayout/HorizontalLayout.tsx';

import './Loot.scss';

interface ComponentProps {
	// Props
}

const Loot = ({  }: ComponentProps): JSX.Element => {
	const loot = calculateLoot()

	return (
		<HorizontalLayout justify="center" align="center">
			<span className="loot">{loot}</span>
		</HorizontalLayout>
	)
}

export default Loot;