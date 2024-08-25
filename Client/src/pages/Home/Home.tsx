import React from 'react';

import Loot from './components/Loot/Loot.tsx';
import LootTimer from './components/LootTimer/LootTimer.tsx';
import Cell from '../../ui/Cell/Cell.tsx';
import Button from '../../ui/Button/Button.tsx';

import '../page.scss';

import claim from './helpers/claim.js';

interface ComponentProps {
	// Props
}

const Home = (): JSX.Element => {
	return (
		<div className="page" id="home">
			<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px', flexGrow: 1}}>
				<Loot />
				<LootTimer />
			</div>
			<div style={{display: 'flex', flexDirection: 'row', gap: '6px'}}>
				<Button 
					disabled 
					mode="white" 
					size="medium" 
					onClick={() => console.log('swap')} 
					style={{flex: 1}}
				>
					Swap
				</Button>
				<Button 
					mode="white" 
					size="medium" 
					haptic={["notification", "success"]} 
					onClick={() => claim()} 
					style={{flex: 1}}
				>
					Claim
				</Button>
				<Button 
					disabled 
					mode="white" 
					size="medium" 
					haptic={["notification", "success"]} 
					onClick={() => console.log('burn')} 
					style={{flex: 1}}
				>
					Burn
				</Button>
			</div>
			<div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
				<Cell subhead="Balance" title="$5,435.45" description="Total balance in tINCH" />
				<Cell subhead="Booster" title="x1.5" description="Total multiplier" />
				<Cell title="Boosters collection" description="Collection of boosters will be available soon" url="https://getgems.io" />
			</div>
		</div>
	)
}

export default Home;