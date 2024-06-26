import './App.css';

import Homepage from './pages/Homepage';
import Reservations from './pages/Reservations';
import ReservationsConfirmed from './pages/ReservationConfirmed';
import AppContextProvider from './context/AppContextProvider';
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
    <AppContextProvider>
      <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/reservations' element={<Reservations/>} />
          <Route path='/reservationsConfirmed' element={<ReservationsConfirmed/>} />
        </Routes>
    </AppContextProvider>

    </>
  );
}

export default App;
