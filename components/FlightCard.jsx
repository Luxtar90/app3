import React from 'react';
import './FlightCard.css'; // Asegúrate de que el archivo CSS correspondiente exista.

function FlightCard({ flight }) {
    // Añade más propiedades según los datos de tus vuelos
    const { id, departureTime, arrivalTime, origin, destination, price, airline, flightNumber } = flight;
  
    return (
      <div className="flight-card" key={id}>
        <div className="flight-header">
          <h3>{airline} - Vuelo {flightNumber}</h3>
        </div>
        <div className="flight-info">
          <p><strong>Origen:</strong> {origin}</p>
          <p><strong>Destino:</strong> {destination}</p>
          <p><strong>Salida:</strong> {departureTime}</p>
          <p><strong>Llegada:</strong> {arrivalTime}</p>
          <p><strong>Precio:</strong> ${price}</p>
        </div>
        <button className="select-flight" onClick={() => handleSelectFlight(id)}>
          Seleccionar Vuelo
        </button>
      </div>
    );
}

export default FlightCard;
