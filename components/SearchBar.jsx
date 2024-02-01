import React, { useState } from 'react';
import './SearchBar.css'; // Asegúrate de que el archivo SearchBar.css exista y contenga los estilos necesarios.

function SearchBar({ onSearch }) {
  // Estado para los valores de entrada del formulario
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  // Función para manejar la búsqueda cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes llamar a una función prop 'onSearch' y pasarle los valores de búsqueda
    onSearch({ origin, destination, date });
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Origen"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destino"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;
