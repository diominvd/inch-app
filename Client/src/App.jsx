import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home.tsx';
import Upgrades from './pages/Upgrades/Upgrades.tsx';
import Tasks from './pages/Tasks/Tasks.tsx';
import Profile from './pages/Profile/Profile.tsx';
import NavigationPanel from './modules/NavigationPanel/NavigationPanel.tsx'

import './index.scss';

const App = () => {
	return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/upgrades' element={<Upgrades />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <NavigationPanel />
    </BrowserRouter>
	)
}

export default App;