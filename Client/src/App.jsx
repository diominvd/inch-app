import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useThemeParams } from "@zakarliuka/react-telegram-web-tools"

import Header from './modules/Header/Header.tsx'
import Home from './pages/Home/Home.tsx';
import Upgrades from './pages/Upgrades/Upgrades.tsx';
import Tasks from './pages/Tasks/Tasks.tsx';
import Profile from './pages/Profile/Profile.tsx';
import NavigationPanel from './modules/NavigationPanel/NavigationPanel.tsx';
import './index.scss';

// Helpers
import createUserData from './pages/Home/helpers/createUserData.js'

// Api
import addUser from './api/api.add-user.js';
import updateUser from './api/api.update-user.js';

// const telegram = window.Telegram.WebApp
// const userData = createUserData(telegram.initDataUnsafe)
import { DateTime } from 'luxon';
const userData = {
	metaData: {
		user_id: 348914389,
		first_name: "dev",
		last_name: "inch",
		username: "diominvd",
		language_code: "ru",
		is_premium: true,
		allows_write_to_pm: true,
		photo_url: ""
	},
	appData: {
		user_id: 348914389,
		inviter_id: undefined,
		friends: 0,
		balance: 0,
		last_claim_time: DateTime.utc().setZone('utc').toISO(),
		reactor: 1,
		storage: 1,
		premium: false,
	}
}


const App = () => {
  // const { setHeaderColor } = useThemeParams()
  // setHeaderColor("rgb(14, 14, 14)")

	useEffect(() => {
		addUser(userData).then((result) => {
			if (result === false) {
				setTimeout(async () => {
					updateUser(userData.metaData)
				}, 1000)
			}
		})
	}, [])

	return (
    <BrowserRouter>
      <Header username={"diominvd"} /> 
      {/* telegram.initDataUnsafe.user.username */}
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