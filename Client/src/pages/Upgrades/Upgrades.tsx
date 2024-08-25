import React from 'react';
import '../page.scss';
import CellDevice from './components/CellDevice/CellDevice';

interface ComponentProps {

}

const Upgrades = ({  }: ComponentProps): JSX.Element => {
	return (
		<div className="page" id="upgrades">
			<CellDevice headline="Reactor" description="The reactor increase mining speed" meta={[1, "2.4/hour", 100]} upgradeAction={() => console.log('upgrade')} />
			<CellDevice headline="Storage" description="The storage increase mining time" meta={[1, "2.4/hour", 100]} upgradeAction={() => console.log('upgrade')} />
		</div>
	)
}

export default Upgrades;