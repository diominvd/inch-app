import React from 'react';
import '../page.scss';

import Button from '../../ui/Button/Button.tsx';

interface ComponentProps {

}

const Home = ({  }: ComponentProps): JSX.Element => {
	return (
		<div className="page" id="home">
			<Button mode="bezeled" size="small" onClick={() => console.log('click')} haptic={["notification", "success"]}>Click bleaty</Button>
		</div>
	)
}

export default Home;