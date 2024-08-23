import React from 'react';
import './CellDevice.scss';
import IconFlash from '../../../../icons/IconParameter';
import IconLevel from '../../../../icons/IconLevel';
import IconCoin from '../../../../icons/IconCoin';
import Button from '../../../../ui/Button/Button';
import Divider from '../../../../ui/Divider/Divider';

interface ComponentProps {
	title: string;
	description: string;
	meta: [number, string, number];
	upgradeAction: () => void;
}

const CellDevice = ({ title, description, meta, upgradeAction }: ComponentProps): JSX.Element => {
	return (
		<div className="cell-device">
			<span className="title">{title}</span>
			<span className="description">{description}</span>
			<div className="information-wrapper">
				<div className="information">
					<IconLevel size={3} />
					<span className="information__text">{meta[0]} level</span>
				</div>
				<div className="information">
					<IconFlash size={3.5} />
					<span className="information__text">{meta[1]}</span>
				</div>
				<div className="information">
					<IconCoin size={3} />
					<span className="information__text">${meta[2]}</span>
				</div>
			</div>
			<Button 
				mode="white" 
				size="medium" 
				onClick={upgradeAction}
				haptic={["impact", "soft"]}
				style={{marginTop: '10px', fontSize: '14px'}}
			>
				Upgrade
			</Button>
		</div>
	)
}

export default CellDevice;