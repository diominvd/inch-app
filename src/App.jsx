import { Route, Routes } from "react-router-dom";

import { Home } from "./home/Home.jsx";
import { Mining } from "./mining/Mining.jsx";
import { Tasks } from "./tasks/Tasks.jsx";
import { Friends } from "./friends/Friends.jsx";
import { NavigationPanel } from "./navigation/Navigation.jsx";


export function App() {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/home" element=<Home /> />
                    <Route path="/mining" element=<Mining /> />
                    <Route path="/tasks" element=<Tasks /> />
                    <Route path="/friends" element=<Friends /> />
                </Routes>
            </div>
            <NavigationPanel />
        </>
    )
}