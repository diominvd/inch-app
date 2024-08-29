import React from 'react';

import Headline from '../../../../ui/Typography/Headline/Headline.tsx';
import Caption from '../../../../ui/Typography/Caption/Caption.tsx';
import Button from '../../../../ui/Button/Button';
import Badge from '../../../../ui/Badge/Badge.tsx';
import HorizontalLayout from '../../../../ui/Layout/HorizontalLayout/HorizontalLayout.tsx';
import IconParameter from '../../../../icons/IconParameter';
import IconLevel from '../../../../icons/IconLevel';
import IconCoin from '../../../../icons/IconCoin';
import './CellDevice.scss';

interface ComponentProps {
	headline: string;
	description: string;
	balance: number;
	meta: [number, string, number];
	upgradeAction: () => void;
}

const CellDevice = ({ headline, description, balance, meta, upgradeAction }: ComponentProps): JSX.Element => {
	const upgradeAvailable = meta[2] > balance ? false : true
	
	return (
		<div className="cell-device">
			<HorizontalLayout justify="start" align="center">
				<Headline weight={1} color="white" plain>{headline}</Headline>
				<Badge mode={upgradeAvailable ? 'good' : 'bad'} />
			</HorizontalLayout>
			<Caption weight={1} color="gray">{description}</Caption>
			<HorizontalLayout justify="start" align="center" gap={24}>
				<div className="attribute">
					<IconLevel size={3} />
					<Caption weight={1} color="gray">{meta[0]} level</Caption>
				</div>
				<div className="attribute">
					<IconParameter size={3} />
					<Caption weight={1} color="gray">{meta[1]}</Caption>
				</div>
				<div className="attribute">
					<IconCoin size={3} />
					<Caption weight={1} color="gray">${meta[2]}</Caption>
				</div>
			</HorizontalLayout>
			<Button
				disabled={upgradeAvailable ? false : true}
				mode="white"
				size="medium"
				haptic={['impact', 'soft']}
				onClick={() => {
					if (confirm(`Upgrade ${headline}?`)) {
						upgradeAction()
					} else {
						alert('Upgrade canceled')
					}
				}}
				style={{marginTop: '6px', fontSize: '14px'}}
			>
				Upgrade
			</Button>
		</div>
	)
}

export default CellDevice;