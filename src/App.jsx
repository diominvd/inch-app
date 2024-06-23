import { Route, Routes } from "react-router-dom";

import { Navigation } from "./navigation/Navigation.jsx";
import { Home } from "./home/Home.jsx";
import { Mining } from "./mining/Mining.jsx";
import { Tasks } from "./tasks/Tasks.jsx";
import { Friends } from "./friends/Friends.jsx";


export function App() {
    return (
        <>
            <Navigation />
            <div>
                <Routes>
                    <Route path="/" element=<Home /> />
                    <Route path="/mining" element=<Mining /> />
                    <Route path="/tasks" element=<Tasks /> />
                    <Route path="/friends" element=<Friends /> />
                </Routes>
            </div>
        </>
    )
}