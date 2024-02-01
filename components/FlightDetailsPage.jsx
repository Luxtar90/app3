import React from 'react';
import './FlightDetailsPage.css'; // Asegúrate de tener un archivo FlightDetailsPage.css

function FlightDetailsPage({ flight }) {
  // Asumiendo que el objeto 'flight' tiene propiedades como 'id', 'origin', 'destination', etc.
  return (
    <div className="flight-details">
      <h2>Detalle del Vuelo</h2>
      <p><strong>Origen:</strong> {flight.origin}</p>
      <p><strong>Destino:</strong> {flight.destination}</p>
      <p><strong>Hora de Salida:</strong> {flight.departureTime}</p>
      <p><strong>Hora de Llegada:</strong> {flight.arrivalTime}</p>
      <p><strong>Precio:</strong> {flight.price}</p>
      {/* Agrega aquí más detalles que desees mostrar */}
      {/* ... */}
    </div>
  );
}

export default FlightDetailsPage;
