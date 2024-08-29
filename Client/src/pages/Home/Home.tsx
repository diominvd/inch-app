import React, { useEffect, useState } from 'react';

import Loot from './components/Loot/Loot.tsx';
import LootTimer from './components/LootTimer/LootTimer.tsx';
import Cell from '../../ui/Cell/Cell.tsx';
import Button from '../../ui/Button/Button.tsx';

import '../page.scss';

import getHomeData from './api/api.get-home-data.js';
import Loading from '../../components/Loading/Loading.tsx';
import getClaim from '../../api/api.get-claim.js';

interface ComponentProps {
	// Props
}

const Home = (): JSX.Element => {
	const userId = 348914389 // telegram.initDataUnsafe.user.id
	const [homeData, setHomeData] = useState()
	const [loading, setLoading] = useState(true)

	const loader = () => {
		getHomeData(userId).then((result) => {
			setHomeData(result)
			setLoading(false)
		})
	}

	useEffect(() => {
		loader()
	}, [loading])

	if (loading) {
		return (
			<Loading />
		)
	}
	return (
		<div className="page" id="home">
			<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px', flexGrow: 1}}>
				<Loot lastClaimTime={homeData.last_claim_time} reactor={homeData.reactor} storage={homeData.storage} />
				<LootTimer lastClaimTime={homeData.last_claim_time} storage={homeData.storage} />
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
					onClick={() => {
						getClaim(userId)
						setLoading(true)
					}} 
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
				<Cell subhead="Balance" title={`$${homeData.balance.toLocaleString('en-US')}`} description="Total balance in tINCH" />
				<Cell subhead="Booster" title="Will be available in next updates" description="Total multiplier" />
				<Cell title="Boosters collection" description="Collection of boosters will be available soon" url="https://getgems.io" />
			</div>
		</div>
	)
}

export default Home;