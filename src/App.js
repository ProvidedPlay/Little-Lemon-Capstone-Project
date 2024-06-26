import './App.css';

import Homepage from './pages/Homepage';
import Reservations from './pages/Reservations';
import ReservationsConfirmed from './pages/ReservationConfirmed';
import {Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/reservations' element={<Reservations/>} />
        <Route path='/reservationsConfirmed' element={<ReservationsConfirmed/>} />
      </Routes>
    </>
  );
}

export default App;
