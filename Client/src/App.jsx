import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useThemeParams } from "@zakarliuka/react-telegram-web-tools"

import Header from './modules/Header/Header.tsx'
import Home from './pages/Home/Home.tsx';
import Upgrades from './pages/Upgrades/Upgrades.tsx';
import Tasks from './pages/Tasks/Tasks.tsx';
import Profile from './pages/Profile/Profile.tsx';
import NavigationPanel from './modules/NavigationPanel/NavigationPanel.tsx'
import './index.scss';
import createUserData from './pages/Home/helpers/createUserData.js'



const telegram = window.Telegram.WebApp
const data = createUserData(telegram.initDataUnsafe)

const App = () => {
  const { setHeaderColor } = useThemeParams()
  setHeaderColor("rgb(14, 14, 14)")

	return (
    <BrowserRouter>
      <Header username={telegram.initDataUnsafe.user.username} />
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