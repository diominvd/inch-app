import '../styles/NavigationPanel.css';
import { NavigationElement } from './NavigationElement';

// Import icons.
import home from '../../../assets/icons/home.svg'
import tasks from '../../../assets/icons/tasks.svg'
import profile from '../../../assets/icons/profile.svg'

export const NavigationPanel = () => {
	return (
		<div className="navigation-panel">
			<NavigationElement path='/' icon={home} text='Home' />
			<NavigationElement path='/tasks' icon={tasks} text='Tasks' />
			<NavigationElement path='/profile' icon={profile} text='Profile' />
		</div>
	)
}