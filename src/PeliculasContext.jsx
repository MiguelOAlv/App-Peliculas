import React, { createContext, useState, useEffect } from 'react';

const PeliculasContext = createContext();

export const PeliculasProvider = ({ children }) => {
  // Intenta leer el estado inicial de `localStorage`, o inicializa como un arreglo vacío
  const [meGusta, setMeGusta] = useState(() => {
    const estadoGuardado = localStorage.getItem('meGusta');
    return estadoGuardado ? JSON.parse(estadoGuardado) : [];
  });

  // Cada vez que `meGusta` cambie, actualiza `localStorage`
  useEffect(() => {
    localStorage.setItem('meGusta', JSON.stringify(meGusta));
  }, [meGusta]);

  // Defino cómo agregar a "Me Gusta"
  const agregarAMegusta = pelicula => {
    setMeGusta(prevMeGusta => {
        // Verifica si la película ya está en la lista por su ID
        const yaEstaEnMeGusta = prevMeGusta.some(p => p.id === pelicula.id);
        if (!yaEstaEnMeGusta) {
            // Si no está, la agrega
            return [...prevMeGusta, pelicula];
        }
        return prevMeGusta; // Si ya está, devuelvo la lista sin cambios
    });
};

  // Defino cómo quitar de "Me Gusta"
  const quitarDeMeGusta = idPelicula => {
    setMeGusta(meGusta.filter(pelicula => pelicula.id !== idPelicula));
  };

  // Intenta leer el estado inicial de `localStorage`, o inicializa como un arreglo vacío
  const [favoritos, setFavoritos] = useState(() => {
    const estadoGuardado = localStorage.getItem('favoritos');
    return estadoGuardado ? JSON.parse(estadoGuardado) : [];
  });

  // Cada vez que `favoritos` cambie, actualiza `localStorage`
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);
  
  // Defino cómo agregar a "Me Gusta"
  const agregarAFavoritos = pelicula => {
    setFavoritos(prevFavoritos => {
        // Verifica si la película ya está en la lista por su ID
        const yaEstaEnFavoritos = prevFavoritos.some(p => p.id === pelicula.id);
        if (!yaEstaEnFavoritos) {
            // Si no está, la agrega
            return [...prevFavoritos, pelicula];
        }
        return prevFavoritos; // Si ya está, devuelvo la lista sin cambios
    });
};
  
  // Defino cómo quitar de "Me Gusta"
  const quitarDeFavoritos = idPelicula => {
    setFavoritos(favoritos.filter(pelicula => pelicula.id !== idPelicula));
  };

  return (
    <PeliculasContext.Provider value={{ meGusta, agregarAMegusta, quitarDeMeGusta, favoritos, agregarAFavoritos, quitarDeFavoritos }}>
      {children}
    </PeliculasContext.Provider>
  );
};


export default PeliculasContext;
