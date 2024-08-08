import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/page.home.jsx';
import { Tasks } from './pages/page.tasks.jsx';
import { Profile } from './pages/page.profile.jsx';
import { NavigationPanel } from './modules/navigation/components/NavigationPanel';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <NavigationPanel />
    </BrowserRouter>
  </React.StrictMode>,
)
