import React from 'react';

import Loot from './components/Loot/Loot.tsx';
import LootTimer from './components/LootTimer/LootTimer.tsx';

import '../page.scss';

interface ComponentProps {
	// Props
}

const Home = ({  }: ComponentProps): JSX.Element => {
	return (
		<div className="page" id="home">
			<Loot />
			<LootTimer />
		</div>
	)
}

export default Home;