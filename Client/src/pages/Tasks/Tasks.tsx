import React from 'react';

import Title from '../../ui/Typography/Title/Title.tsx';
import '../page.scss';
import Caption from '../../ui/Typography/Caption/Caption.tsx';

interface ComponentProps {

}

const Tasks = ({  }: ComponentProps): JSX.Element => {
	return (
		<div className="page" id="tasks">
			<Title plain level={2} weight={2} color="white" center>Task will be available soon</Title>
			<Caption color="gray">
				<p style={{textAlign: 'center'}}>For cooperation, you can contact the project support: <a href="https://t.me/inch_support" style={{color: 'var(--accent-1000'}}>@inch_support</a></p>
			</Caption>
		</div>
	)
}

export default Tasks;