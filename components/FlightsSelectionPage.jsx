import React, { useState, useEffect } from 'react';
import FlightCard from './FlightCard';
import FlightDetailsPage from './FlightDetailsPage'; // Importa el componente de detalles de vuelo
import './FlightsSelectionPage.css';
import { flightsData } from '../data/flightsData';

function FlightsSelectionPage() {
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);

  useEffect(() => {
    // Simulamos la carga de datos desde una API o archivo local
    setFlights(flightsData);
  }, []);

  // Función para mostrar los detalles de un vuelo seleccionado
  const handleFlightSelection = (flight) => {
    setSelectedFlight(flight);
  };

  return (
    <div className="flights-selection">
      <div className="flight-cards">
        {flights.map((flight) => (
          <FlightCard
            key={flight.id}
            flight={flight}
            onSelectFlight={() => handleFlightSelection(flight)} // Pasamos la función de selección como prop
          />
        ))}
      </div>
      <div className="flight-details">
        {selectedFlight && (
          <FlightDetailsPage flight={selectedFlight} />
        )}
      </div>
    </div>
  );
}

export default FlightsSelectionPage;
