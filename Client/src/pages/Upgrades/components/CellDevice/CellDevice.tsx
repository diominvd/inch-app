import React from 'react';

import Headline from '../../../../ui/Typography/Headline/Headline.tsx';
import Caption from '../../../../ui/Typography/Caption/Caption.tsx';
import Button from '../../../../ui/Button/Button';
import VerticalLayout from '../../../../ui/Layout/VerticalLayout/VerticalLayout.tsx';
import HorizontalLayout from '../../../../ui/Layout/HorizontalLayout/HorizontalLayout.tsx';

import IconParameter from '../../../../icons/IconParameter';
import IconLevel from '../../../../icons/IconLevel';
import IconCoin from '../../../../icons/IconCoin';

import './CellDevice.scss';
import upgradeDevice from '../../helpers/upgradeDevice.js';
import Badge from '../../../../ui/Badge/Badge.tsx';

interface ComponentProps {
	headline: string;
	description: string;
	meta: [number, string, number];
	upgradeAction: () => void;
}

const CellDevice = ({ headline, description, meta }: ComponentProps): JSX.Element => {
	return (
		<div className="cell-device">
			<HorizontalLayout justify="start" align="center">
				<Headline weight={1} color="white" plain>{headline}</Headline>
				<Badge mode="good" />
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
				mode="white"
				size="medium"
				haptic={['impact', 'soft']}
				onClick={() => upgradeDevice(headline.toLowerCase())}
				style={{marginTop: '6px', fontSize: '14px'}}
			>
				Upgrade
			</Button>
		</div>
	)
}

export default CellDevice;