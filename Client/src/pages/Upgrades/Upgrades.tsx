import React, { useEffect, useState } from 'react';
import CellDevice from './components/CellDevice/CellDevice';
import getUpgradesData from './api/api.get-upgrades-data';
import Loading from '../../components/Loading/Loading';
import '../page.scss';

// API
import upgradeReactor from './api/api.upgrade-reactor';
import upgradeStorage from './api/api.upgrade-storage';

interface ComponentProps {

}

const Upgrades = ({  }: ComponentProps): JSX.Element => {
	const userId = 348914389 // telegram.initDataUnsafe.user.id
	const [upgradesData, setUpgradesData] = useState()
	const [loading, setLoading] = useState(true)

	const loader = () => {
		console.log('loader')
		getUpgradesData(userId).then((result) => {
			setUpgradesData(result)
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
		<div className="page" id="upgrades">
			<CellDevice 
				headline="Reactor" 
				description="The reactor increase mining speed" 
				balance={upgradesData.balance}
				meta={[
					upgradesData.reactor,
					`${upgradesData.reactor * 0.001 * 3600}/hour`,
					150 * 2.2 ** (upgradesData.reactor - 1)
				]} 
				upgradeAction={() => {
					upgradeReactor(userId)
					setLoading(true)
				}} 
			/>

			<CellDevice 
				headline="Storage" 
				description="The storage increase mining time" 
				balance={upgradesData.balance}
				meta={[
					upgradesData.storage,
					`${upgradesData.storage} hours`,
					75 * 2.2 ** (upgradesData.storage - 1) 
				]} 
				upgradeAction={() => {
					upgradeStorage(userId)
					setLoading(true)
				}} 
			/>
		</div>
	)
}

export default Upgrades;