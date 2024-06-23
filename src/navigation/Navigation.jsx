import { Link } from "react-router-dom";


export function Navigation() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/mining">Mining</Link>
                <Link to="/tasks">Tasks</Link>
                <Link to="/friends">Friends</Link>
            </nav>
        </header>
    )
}