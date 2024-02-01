import React from 'react';
import './FlightOffers.css'; // Asegúrate de tener un archivo FlightOffers.css
import { flightsData } from '../data/flightsData'; // Ajusta la ruta según la ubicación de tu archivo

function FlightOffers() {
  // Imaginemos que flightsData es un array de ofertas de vuelos
  return (
    <div className="flight-offers">
      {flightsData.map((offer) => (
        <div key={offer.id} className="offer">
          <h3>{offer.destination}</h3>
          <p>{`Desde $${offer.price}`}</p>
          {/* Puedes agregar más información y estilos aquí */}
        </div>
      ))}
    </div>
  );
}

export default FlightOffers;
