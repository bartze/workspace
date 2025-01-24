import React, { useState, useEffect } from 'react';

function App() {
  const [fecha, setFecha] = useState(new Date());
  const [modoOscuro, setModoOscuro] = useState(true);

  useEffect(() => {
    const timerID = setInterval(() => {
      setFecha(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  // Efecto para actualizar la clase del body cuando cambia el modo
  useEffect(() => {
    document.body.classList.toggle('modo-oscuro', modoOscuro);
    document.body.classList.toggle('modo-claro', !modoOscuro);
  }, [modoOscuro]);

  const toggleModo = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <div className="contenido">
      <h1>Hola, Eneko!</h1>
      <h2>Son las {fecha.toLocaleTimeString()}.</h2>
      <button onClick={toggleModo}>
        Cambiar a modo {modoOscuro ? 'claro' : 'oscuro'}
      </button>
    </div>
  );
}

export default App;


