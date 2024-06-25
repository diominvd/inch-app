import { Link } from "react-router-dom";
import "./Navigation.css"

import homeIcon from "./icons/home.svg"
import miningIcon from "./icons/mining.svg"
import tasksIcon from "./icons/tasks.svg"
import friendsIcon from "./icons/friends.svg"


export function NavigationPanel() {
    return (
        <nav className="panel-nav" onClick={ActivateElement}>
            <Link to="/home" className="link-nav">
                <NavigationElement icon={homeIcon} id="home" title="Home" />
            </Link>
            <Link to="/mining" className="link-nav">
                <NavigationElement icon={miningIcon} id="mining" title="Mining" />
            </Link>
            <Link to="/tasks" className="link-nav">
                <NavigationElement icon={tasksIcon} id="tasks" title="Tasks" />
            </Link>
            <Link to="/friends" className="link-nav">
                <NavigationElement icon={friendsIcon} id="friends" title="Friends" />
            </Link>
        </nav>
    )
}


function NavigationElement(props) {
    return (
        <div className="element-nav" id={props.id}>
            <img src={props.icon} className="icon-nav" alt="" />
            <p className="icon-nav-title">{props.title}</p>
        </div>
    )
}


function ActivateElement() {
    let Pages = ["home", "mining", "tasks", "friends"]
    let CurrentPath = window.location.pathname.slice(1)

    for (const key of Pages) {
        let element = document.querySelector("div#" + key + ".element-nav")
        if (key === CurrentPath) {
            element.querySelector("img.icon-nav").classList.add("active")
            element.querySelector("p.icon-nav-title").classList.add("active")
        } else if (key !== CurrentPath) {
            element.querySelector("img.icon-nav").classList.remove("active")
            element.querySelector("p.icon-nav-title").classList.remove("active")
        }
    }
}