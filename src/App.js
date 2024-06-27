import React from 'react';
import './App.css'
import Homepage from './Component/Homepage';
import Community from './Component/Community';
import ClientdashboardHome from './pages/ClientPages/ClientdashboardHome';
import ClientDashboardBookAppointment from './pages/ClientPages/ClientDashboardBookAppointment';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/community' element={<Community />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
