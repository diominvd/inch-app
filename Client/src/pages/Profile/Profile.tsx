import React from 'react';
import { initUtils } from '@telegram-apps/sdk';

import Title from '../../ui/Typography/Title/Title.tsx';
import Caption from '../../ui/Typography/Caption/Caption.tsx';
import Button from '../../ui/Button/Button.tsx';
;import '../page.scss';
import FriendsCounter from './components/FriendsCounter/FriendsCounter.tsx';
import FriendsDescription from './components/FriendsDescription/FriendsDescription.tsx';
import VerticalLayout from '../../ui/Layout/VerticalLayout/VerticalLayout.tsx';

interface ComponentProps {

}

// const telegram = window.Telegram.WebApp
// const utils = initUtils()
const invite = {
	url: 'Become a part of the Independent Chain history with me ⚡️\n\n🇬🇧 Channel: @inch_ton\n🇷🇺 CIS Channel: @inch_ton_cis\n💬 Chat: @inch_ton_chat',
	text: `https://t.me/pc_controller_f15_bot/inchapptesttest?startapp=${12345}`, 
}

//telegram.initDataUnsafe.user.id

const Profile = ({  }: ComponentProps): JSX.Element => {
	return (
		<div className="page" id="profile">
			<VerticalLayout justify="center" align="center" gap={10}>
				<FriendsCounter friends={4} />
				<FriendsDescription />
				<Button
					mode="white"
					size="medium"
					haptic={["notification", "success"]}
					onClick={() => utils.shareURL(invite.url, invite.text)}
					style={{marginTop: '16px'}}
				>
					Invite friend
			</Button>
			</VerticalLayout>
		</div>
	)
}

export default Profile;