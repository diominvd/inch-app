import { NavLink } from "react-router-dom";
import '../styles/NavigationElement.css';

export const NavigationElement = ({ path, icon, text }) => {
	return (
		<NavLink
			to={path}
			className={({ isActive }) => 
				isActive ? 'navigation-element active' : 'navigation-element'
			}
		>
			<img src={icon} alt={text} className="navigation-element__icon" />
			<p className="navigation-element__name">{text}</p>
		</NavLink>
	)
}