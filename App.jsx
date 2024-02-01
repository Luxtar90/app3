import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import FlightOffers from './components/FlightOffers';
import FlightsSelectionPage from './components/FlightsSelectionPage';
import FlightDetailsPage from './components/FlightDetailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/offers" element={<FlightOffers />} />
          <Route path="/select-flight" element={<FlightsSelectionPage />} />
          <Route path="/flight-details" element={<FlightDetailsPage />} />
          {/* Puedes seguir agregando rutas según necesites */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
